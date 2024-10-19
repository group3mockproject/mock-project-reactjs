import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField, Modal, Typography } from "@mui/material";
import "./MaintenanceRequests.scss";

const requestData = [
  {
    request_id: 1,
    resident_id: 1,
    employee_id: 2,
    request_date: "2024-01-05",
    priority: "High",
    description: "Leaking faucet in kitchen",
    status: "Pending",
    delflag: 0,
  },
  {
    request_id: 2,
    resident_id: 1,
    employee_id: 3,
    request_date: "2024-01-06",
    priority: "Medium",
    description: "Heating issue in living room",
    status: "In Progress",
    delflag: 0,
  },
  {
    request_id: 3,
    resident_id: 1,
    employee_id: 4,
    request_date: "2024-01-07",
    priority: "Low",
    description: "Light bulb replacement",
    status: "Completed",
    delflag: 0,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

const MaintenanceRequests = () => {
  const [requests, setRequests] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const columns = [
    { field: "request_id", headerName: "Request ID", width: 120 },
    { field: "description", headerName: "Description", width: 300 },
    { field: "request_date", headerName: "Request Date", width: 150 },
    { field: "priority", headerName: "Priority", width: 120 },
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

  useEffect(() => {
    const _data = requestData.map((request) => ({
      ...request,
      id: request.request_id,
    }));
    setRequests(_data);
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
            <strong>ID:</strong> {request.request_id}
          </p>
          <p>
            <strong>Description:</strong> {request.description}
          </p>
          <p>
            <strong>Date:</strong> {request.request_date}
          </p>
          <p>
            <strong>Priority:</strong> {request.priority}
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

const CreateRequestModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    description: "",
    priority: "Low",
    request_date: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating request:", formData);
    onClose();
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
          <TextField
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Request Date"
            name="request_date"
            type="date"
            value={formData.request_date}
            onChange={handleChange}
            fullWidth
            margin="normal"
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

export default MaintenanceRequests;
