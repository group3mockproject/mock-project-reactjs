import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./MaintenanceRequests.scss";

// Dữ liệu mẫu của các request
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

const MaintenanceRequests = () => {
  const [requests, setRequests] = useState(requestData);
  const [searchDate, setSearchDate] = useState("");

  // Xử lý tìm kiếm theo ngày
  const handleSearch = (e) => {
    const date = e.target.value;
    setSearchDate(date);
    if (date) {
      const filtered = requestData.filter((req) => req.request_date === date);
      setRequests(filtered);
    } else {
      setRequests(requestData);
    }
  };

  return (
    <div className="maintenance-requests">
      <h1 className="maintenance-requests__heading">My Maintenance Requests</h1>

      <div className="maintenance-requests__search">
        <TextField
          type="date"
          label="Search by Date"
          InputLabelProps={{ shrink: true }}
          value={searchDate}
          onChange={handleSearch}
        />
      </div>

      <TableContainer component={Paper} className="maintenance-requests__table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Request ID</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Request Date</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.request_id}>
                <TableCell>{request.request_id}</TableCell>
                <TableCell>{request.description}</TableCell>
                <TableCell>{request.request_date}</TableCell>
                <TableCell>{request.priority}</TableCell>
                <TableCell>{request.status}</TableCell>
                <TableCell>
                  <Link to={`/resident/requests/${request.request_id}`}>
                    <Button variant="outlined" size="small">
                      View
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="maintenance-requests__create-button">
        <Link to="/resident/requests/new">
          <Button variant="contained">Create New Request</Button>
        </Link>
      </div>
    </div>
  );
};

export default MaintenanceRequests;
