import React from "react";
import { useParams } from "react-router-dom";
import "./ComplaintDetail.scss";

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

const ComplaintDetail = () => {
  const { id } = useParams();
  const complaint = complaintData.find(
    (item) => item.complaint_id === parseInt(id)
  );

  if (!complaint) {
    return <div>Complaint not found</div>;
  }

  return (
    <div className="complaint-detail">
      <h1>Complaint Detail #{complaint.complaint_id}</h1>
      <p>
        <b>Type:</b> {complaint.complaint_type}
      </p>
      <p>
        <b>Description:</b> {complaint.description}
      </p>
      <p>
        <b>Status:</b> {complaint.status}
      </p>
      <p>
        <b>Resolved At:</b>{" "}
        {complaint.resolved_at ? complaint.resolved_at : "Not yet resolved"}
      </p>
    </div>
  );
};

export default ComplaintDetail;
