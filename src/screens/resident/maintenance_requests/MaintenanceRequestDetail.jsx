import React from "react";
import { useParams } from "react-router-dom";
import "./MaintenanceRequestDetail.scss";

// Dữ liệu mẫu cho các yêu cầu bảo trì
const requestData = [
  {
    request_id: 1,
    resident_id: 1,
    employee_id: 2,
    request_date: "2024-01-05",
    priority: "High",
    description: "Leaking faucet in kitchen",
    status: "Pending",
  },
  {
    request_id: 2,
    resident_id: 1,
    employee_id: 3,
    request_date: "2024-01-06",
    priority: "Medium",
    description: "Heating issue in living room",
    status: "In Progress",
  },
];

const MaintenanceRequestDetail = () => {
  const { id } = useParams();
  const request = requestData.find((item) => item.request_id === parseInt(id));

  if (!request) {
    return (
      <div className="maintenance-request-detail__not-found">
        Maintenance request not found.
      </div>
    );
  }

  return (
    <div className="maintenance-request-detail">
      <h1 className="maintenance-request-detail__heading">
        Maintenance Request #{request.request_id}
      </h1>
      <p>
        <b>Description:</b> {request.description}
      </p>
      <p>
        <b>Priority:</b> {request.priority}
      </p>
      <p>
        <b>Status:</b> {request.status}
      </p>
      <p>
        <b>Request Date:</b> {request.request_date}
      </p>
    </div>
  );
};

export default MaintenanceRequestDetail;
