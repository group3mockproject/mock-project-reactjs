import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField } from "@mui/material";
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

const paginationModel = { page: 0, pageSize: 5 };

const MaintenanceRequests = () => {
  const [requests, setRequests] = useState([]);
  const [searchText, setSearchText] = useState("");

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
        <Link to={`/customer/maintenance-requests/${row.request_id}`}>
          <Button variant="outlined" size="small">
            View
          </Button>
        </Link>
      ),
    },
  ];

  useEffect(() => {
    const _data = requestData.map((request) => ({
      ...request,
      id: request.request_id, // Bắt buộc cho DataGrid
    }));
    setRequests(_data);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    if (value) {
      const filtered = requestData.filter(
        (req) =>
          req.description.toLowerCase().includes(value) ||
          req.status.toLowerCase().includes(value) ||
          req.priority.toLowerCase().includes(value)
      );
      setRequests(filtered.map((req) => ({ ...req, id: req.request_id })));
    } else {
      setRequests(requestData.map((req) => ({ ...req, id: req.request_id })));
    }
  };

  return (
    <div className="maintenance-requests">
      <h1>My Maintenance Requests</h1>

      <div className="maintenance-requests__search">
        <form className="my-complaint__search-area">
          <TextField label="Search..." size="small" />
          <Button variant="contained">Search</Button>
        </form>
        <Link to="/customer/maintenance-requests/new">
          <Button variant="contained">Create New Request</Button>
        </Link>
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
    </div>
  );
};

export default MaintenanceRequests;
