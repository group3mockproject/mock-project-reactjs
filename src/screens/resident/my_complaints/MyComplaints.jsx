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
} from "@mui/material";
import { Link } from "react-router-dom";
import "./MyComplaints.scss";

// Dữ liệu mẫu của complaint
const complaintData = [
  {
    complaint_id: 1,
    resident_id: 1,
    employee_id: 1,
    complaint_type: "Noise Complaint",
    description: "Loud music from the apartment above.",
    resolved_at: null,
    status: "Pending",
  },
  {
    complaint_id: 2,
    resident_id: 2,
    employee_id: 2,
    complaint_type: "Maintenance Issue",
    description: "Leaking faucet in the kitchen.",
    resolved_at: null,
    status: "Pending",
  },
];

const MyComplaint = () => {
  const [complaints] = useState(complaintData);

  return (
    <div className="my-complaint">
      <h1 className="my-complaint__heading">My Complaints</h1>

      <TableContainer component={Paper} className="my-complaint__table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Complaint ID</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {complaints.map((complaint) => (
              <TableRow key={complaint.complaint_id}>
                <TableCell>{complaint.complaint_id}</TableCell>
                <TableCell>{complaint.complaint_type}</TableCell>
                <TableCell>{complaint.description}</TableCell>
                <TableCell>{complaint.status}</TableCell>
                <TableCell>
                  <Link to={`/resident/complaints/${complaint.complaint_id}`}>
                    <Button variant="outlined" size="small">
                      View Details
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="my-complaint__create-button">
        <Link to="/resident/complaints/new">
          <Button variant="contained">Create New Complaint</Button>
        </Link>
      </div>
    </div>
  );
};

export default MyComplaint;
