import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./MyComplaints.scss";

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

const MyComplaints = () => {
  const [complaints] = useState(complaintData);

  return (
    <div className="my-complaint">
      <h1 className="my-complaint__heading">My Complaints</h1>
      <p className="my-complaint__desc">
        {/* <i>Here are the complaints you have filed:</i> */}
      </p>

      <div className="my-complaint__list">
        {complaints.map((complaint) => (
          <ComplaintCard key={complaint.complaint_id} {...complaint} />
        ))}
      </div>

      <div className="my-complaint__create">
        <Link to="/customer/complaints/new">
          <Button variant="contained" className="my-complaint__button">
            Create New Complaint
          </Button>
        </Link>
      </div>
    </div>
  );
};

const ComplaintCard = ({
  complaint_id,
  complaint_type,
  description,
  status,
}) => {
  return (
    <div className="my-complaint__card">
      <div className="my-complaint__card-header">
        <h3>{complaint_type}</h3>
        <p>{description}</p>
      </div>
      <div className="my-complaint__card-footer">
        <p>Status: {status}</p>
        <Link to={`/customer/complaints/${complaint_id}`}>
          <Button className="my-complaint__button" variant="outlined">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MyComplaints;
