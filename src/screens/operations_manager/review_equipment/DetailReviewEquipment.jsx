import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Typography, TextField, Snackbar, Alert } from "@mui/material";
import "./DetailReviewEquipment.scss";

const equipmentRequests = [
  {
    request_id: 1,
    resident_name: "John Doe",
    apartment: "A101",
    equipment_name: "Air Conditioner",
    priority: "High",
    request_date: "2024-10-01",
    description: "Máy lạnh không hoạt động.",
    status: "Pending",
  },
  {
    request_id: 2,
    resident_name: "Emily Davis",
    apartment: "B202",
    equipment_name: "Water Heater",
    priority: "Medium",
    request_date: "2024-10-05",
    description: "Bình nước nóng không đủ nhiệt.",
    status: "In Progress",
  },
];

const equipmentDetails = {
  equipment_id: 1,
  name: "Air Conditioner",
  category: "HVAC",
  equipment_code: "AC-001",
  status: "In Maintenance",
  maintenance_history: [
    {
      maintenance_id: 101,
      description: "Bảo trì định kỳ",
      contractor: "ABC Cooling Services",
      fixed_date: "2024-08-20",
      status: "Completed",
    },
    {
      maintenance_id: 102,
      description: "Thay bộ lọc",
      contractor: "ABC Cooling Services",
      fixed_date: "2024-09-15",
      status: "Completed",
    },
  ],
};

const DetailReviewEquipment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showReasonField, setShowReasonField] = useState(false);
  const [reason, setReason] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleApprove = () => {
    setSnackbarMessage(`Request ${id} approved.`);
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
    setTimeout(() => navigate("/operations/review-equipment"), 1500);
  };

  const handleReject = () => {
    if (!reason) {
      setSnackbarMessage("Please provide a reason for rejection.");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      return;
    }
    setSnackbarMessage(`Request ${id} rejected.`);
    setSnackbarSeverity("error");
    setSnackbarOpen(true);
    setTimeout(() => navigate("/operations/review-equipment"), 1500);
  };

  const handleCancelReject = () => {
    setShowReasonField(false);
    setReason("");
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="detail-review-equipment">
      <div className="left-section">
        <Typography variant="h5">Request Details</Typography>

        <div className="grid-container">
          <p>
            <strong>Resident:</strong> {equipmentRequests[id - 1].resident_name}
          </p>
          <p>
            <strong>Apartment:</strong> {equipmentRequests[id - 1].apartment}
          </p>
          <p>
            <strong>Equipment:</strong> {equipmentDetails.name}
          </p>
          <p>
            <strong>Category:</strong> {equipmentDetails.category}
          </p>
          <p>
            <strong>Priority:</strong> {equipmentRequests[id - 1].priority}
          </p>
          <p>
            <strong>Request Date:</strong>{" "}
            {equipmentRequests[id - 1].request_date}
          </p>
          <div className="full-width">
            <p>
              <strong>Status:</strong> {equipmentDetails.status}
            </p>
          </div>
          <div className="full-width">
            <p>
              <strong>Description:</strong>{" "}
              {equipmentRequests[id - 1].description}
            </p>
          </div>
        </div>

        <div className="actions">
          <Button variant="contained" color="success" onClick={handleApprove}>
            Approve
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setShowReasonField(true)}
          >
            Reject
          </Button>
        </div>

        {showReasonField && (
          <div className="reject-section">
            <TextField
              label="Reason for Rejection"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
            <div className="reject-actions">
              <Button variant="contained" color="error" onClick={handleReject}>
                Confirm Reject
              </Button>
              <Button variant="outlined" onClick={handleCancelReject}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="right-section">
        <Typography variant="h6">Maintenance History</Typography>
        {equipmentDetails.maintenance_history.map((history) => (
          <div key={history.maintenance_id}>
            <p>
              <strong>Date:</strong> {history.fixed_date}
            </p>
            <p>
              <strong>Description:</strong> {history.description}
            </p>
            <p>
              <strong>Contractor:</strong> {history.contractor}
            </p>
            <p>
              <strong>Status:</strong> {history.status}
            </p>
            <hr />
          </div>
        ))}
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default DetailReviewEquipment;
