import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField, Modal, Typography } from "@mui/material";
import axios from "axios"; // Sử dụng axios để gọi API
import "./MyComplaints.scss";

const paginationModel = { page: 0, pageSize: 5 };

const MyComplaints = () => {
  const [data, setData] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const columns = [
    { field: "complaint_id", headerName: "Complaint ID", width: 150 },
    { field: "complaint_type", headerName: "Type", width: 200 },
    { field: "description", headerName: "Description", width: 300 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "action",
      headerName: "View",
      width: 200,
      sortable: false,
      renderCell: ({ row }) => (
        <Button
          variant="outlined"
          size="small"
          onClick={() => handleViewComplaint(row.complaint_id)}
        >
          View
        </Button>
      ),
    },
  ];

  // Fetch complaint data from API when component mounts
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_CUSTOMER_COMPLAINTS}`
        );
        const complaints = response.data.map((complaint) => ({
          ...complaint,
          id: complaint.complaint_id, // Ensure DataGrid works with an 'id' field
        }));
        setData(complaints);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  const handleViewComplaint = async (complaint_id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_CUSTOMER_COMPLAINTS}/${complaint_id}`
      );
      setSelectedComplaint(response.data);
      setIsViewModalOpen(true);
    } catch (e) {
      setError(e);
    }
  };

  const handleCreateComplaint = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsViewModalOpen(false);
    setIsCreateModalOpen(false);
    setSelectedComplaint(null);
  };

  if (isLoading) return <p>Loading complaints...</p>;
  if (error) return <p>Error loading complaints: {error.message}</p>;

  return (
    <div className="my-complaint">
      <h1>My Complaints</h1>

      <div className="my-complaint__actions">
        <form className="my-complaint__search-area">
          <TextField label="Search..." size="small" />
          <Button variant="contained">Search</Button>
        </form>
        <Button variant="contained" onClick={handleCreateComplaint}>
          Create New Complaint
        </Button>
      </div>

      <div className="my-complaint__table">
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </div>

      <ComplaintModal
        isOpen={isViewModalOpen}
        onClose={handleCloseModal}
        complaint={selectedComplaint}
      />

      <CreateComplaintModal
        isOpen={isCreateModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

const ComplaintModal = ({ isOpen, onClose, complaint }) => (
  <Modal open={isOpen} onClose={onClose} className="complaint-modal">
    <div className="complaint-modal__content">
      <Typography variant="h5">Complaint Detail </Typography>
      {complaint ? (
        <div>
          <p>
            <strong>ID:</strong> {complaint.complaint_id}
          </p>
          <p>
            <strong>Type:</strong> {complaint.complaint_type}
          </p>
          <p>
            <strong>Description:</strong> {complaint.description}
          </p>
          <p>
            <strong>Status:</strong> {complaint.status}
          </p>
        </div>
      ) : (
        <p>No complaint selected.</p>
      )}
      <Button variant="contained" onClick={onClose}>
        Close
      </Button>
    </div>
  </Modal>
);

const CreateComplaintModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    complaint_type: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating complaint:", formData);
    // Call API to create complaint
    // axios.post(`${import.meta.env.VITE_API_CUSTOMER_COMPLAINTS}`, formData)
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose} className="complaint-modal">
      <div className="complaint-modal__content">
        <Typography variant="h6">Create New Complaint</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Complaint Type"
            name="complaint_type"
            value={formData.complaint_type}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: "16px",
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default MyComplaints;
