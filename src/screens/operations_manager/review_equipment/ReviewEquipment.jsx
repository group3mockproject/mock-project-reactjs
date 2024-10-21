import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./ReviewEquipment.scss";

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

const ReviewEquipment = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const _data = equipmentRequests.map((request) => ({
      ...request,
      id: request.request_id,
    }));
    setData(_data);
  }, []);

  const handleViewRequest = (request) => {
    navigate(`/operations/review-equipment/${request.request_id}`);
  };

  const columns = [
    { field: "request_id", headerName: "Request ID", width: 150 },
    { field: "resident_name", headerName: "Resident", width: 150 },
    { field: "apartment", headerName: "Apartment", width: 150 },
    { field: "equipment_name", headerName: "Equipment", width: 200 },
    { field: "priority", headerName: "Priority", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "action",
      headerName: "Actions",
      width: 300,
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

  return (
    <div className="review-equipment">
      <h1>Review Equipment Requests</h1>
      <div className="review-equipment__table">
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </div>
    </div>
  );
};

export default ReviewEquipment;
