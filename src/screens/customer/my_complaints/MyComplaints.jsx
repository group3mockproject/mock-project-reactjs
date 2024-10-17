import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField } from "@mui/material";
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

const paginationModel = { page: 0, pageSize: 5 };

const MyComplaints = () => {
  const [data, setData] = useState([]);

  const columns = [
    { field: "complaint_id", headerName: "Complaint ID", width: 150 },
    { field: "complaint_type", headerName: "Type", width: 200 },
    { field: "description", headerName: "Description", width: 300 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "action",
      headerName: "View",
      width: 200,
      sortable: false,
      renderCell: ({ row }) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to={`/customer/complaints/${row.complaint_id}`}>
            <Button variant="outlined" size="small">
              View
            </Button>
          </Link>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const _data = complaintData.map((complaint) => ({
      ...complaint,
      id: complaint.complaint_id,
    }));
    setData(_data);
  }, []);

  return (
    <div className="my-complaint">
      <h1>My Complaints</h1>

      <div className="my-complaint__actions">
        <form className="my-complaint__search-area">
          <TextField label="Search..." size="small" />
          <Button variant="contained">Search</Button>
        </form>
        <Link to="/customer/complaints/new">
          <Button variant="contained">Create New Complaint</Button>
        </Link>
      </div>

      <div className="my-complaint__table">
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </div>
    </div>
  );
};

export default MyComplaints;
