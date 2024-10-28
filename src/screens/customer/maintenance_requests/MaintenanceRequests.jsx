import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  TextField,
  Modal,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import "./MaintenanceRequests.scss";

const paginationModel = { page: 0, pageSize: 5 };

const MaintenanceRequests = () => {
  const [requests, setRequests] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const columns = [
    { field: "requestId", headerName: "Request ID", width: 120 },
    { field: "description", headerName: "Description", width: 300 },
    { field: "requestDate", headerName: "Request Date", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      sortable: false,
      renderCell: ({ row }) => (
        <Button
          variant="outlined"
          size="small"
          onClick={() => handleViewRequest(row)}
        >
          View
        </Button>
      ),
    },
  ];

  const fetchRequests = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.get(
        "http://localhost:9090/api/v1/maintenance/requests",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data.map((request) => ({
        ...request,
        id: request.requestId, // required for DataGrid
      }));
      setRequests(data);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleViewRequest = (request) => {
    setSelectedRequest(request);
    setIsViewModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedRequest(null);
    setIsViewModalOpen(false);
    setIsCreateModalOpen(false);
  };

  const handleCreateRequest = () => {
    setIsCreateModalOpen(true);
  };

  return (
    <div className="maintenance-requests">
      <h1>My Maintenance Requests</h1>

      <div className="maintenance-requests__search">
        <form className="maintenance-requests__search-area">
          <TextField
            label="Search..."
            size="small"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="contained">Search</Button>
        </form>
        <Button variant="contained" onClick={handleCreateRequest}>
          Create New Request
        </Button>
      </div>

      <div className="maintenance-requests__table">
        <DataGrid
          rows={requests}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </div>

      <RequestDetailModal
        isOpen={isViewModalOpen}
        onClose={handleCloseModal}
        request={selectedRequest}
      />

      <CreateRequestModal
        isOpen={isCreateModalOpen}
        onClose={handleCloseModal}
        refreshRequests={fetchRequests}
      />
    </div>
  );
};

const RequestDetailModal = ({ isOpen, onClose, request }) => (
  <Modal open={isOpen} onClose={onClose} className="request-modal">
    <div className="request-modal__content">
      <Typography variant="h5">Request Detail</Typography>
      {request ? (
        <div>
          <p>
            <strong>ID:</strong> {request.requestId}
          </p>
          <p>
            <strong>Description:</strong> {request.description}
          </p>
          <p>
            <strong>Date:</strong> {request.requestDate}
          </p>
          <p>
            <strong>Status:</strong> {request.status}
          </p>
        </div>
      ) : (
        <p>No request selected.</p>
      )}
      <Button variant="contained" onClick={onClose}>
        Close
      </Button>
    </div>
  </Modal>
);

const CreateRequestModal = ({ isOpen, onClose, refreshRequests }) => {
  const [formData, setFormData] = useState({
    description: "",
    status: "Pending",
    requestDate: new Date().toISOString().split("T")[0],
    residentId: JSON.parse(localStorage.getItem("userId")) || 1,
    employeeId: 202,
    delFlag: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data to be sent:", formData);
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      await axios.post(
        "http://localhost:9090/api/v1/maintenance/requests",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Request created successfully");
      refreshRequests(); // Tải lại danh sách yêu cầu
      onClose(); // Đóng modal
    } catch (error) {
      console.error("Error creating request:", error);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose} className="request-modal">
      <div className="request-modal__content">
        <Typography variant="h5">Create New Request</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <Button type="submit" variant="contained" sx={{ marginTop: "16px" }}>
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default MaintenanceRequests;
