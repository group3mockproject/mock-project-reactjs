import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

import "./ViewContracts.scss";

const contractData = [
  {
    lease_id: 1,
    resident_id: 1,
    apartment_id: 1,
    start_date: "2024-01-01",
    end_date: "2025-01-01",
    rent_amount: 1500.0,
    deposit_amount: 1500.0,
    status: "Active",
  },
  {
    lease_id: 2,
    resident_id: 2,
    apartment_id: 2,
    start_date: "2024-02-01",
    end_date: "2025-02-01",
    rent_amount: 1500.0,
    deposit_amount: 1500.0,
    status: "Active",
  },
  {
    lease_id: 3,
    resident_id: 3,
    apartment_id: 3,
    start_date: "2024-02-01",
    end_date: "2025-02-01",
    rent_amount: 1500.0,
    deposit_amount: 1500.0,
    status: "Active",
  },
  {
    lease_id: 4,
    resident_id: 4,
    apartment_id: 4,
    start_date: "2024-02-01",
    end_date: "2025-02-01",
    rent_amount: 1500.0,
    deposit_amount: 1500.0,
    status: "Active",
  },
  {
    lease_id: 5,
    resident_id: 5,
    apartment_id: 5,
    start_date: "2024-02-01",
    end_date: "2025-02-01",
    rent_amount: 1500.0,
    deposit_amount: 1500.0,
    status: "Active",
  },
  {
    lease_id: 6,
    resident_id: 6,
    apartment_id: 6,
    start_date: "2024-02-01",
    end_date: "2025-02-01",
    rent_amount: 1500.0,
    deposit_amount: 1500.0,
    status: "Active",
  },
  {
    lease_id: 7,
    resident_id: 7,
    apartment_id: 7,
    start_date: "2024-02-01",
    end_date: "2025-02-01",
    rent_amount: 1500.0,
    deposit_amount: 1500.0,
    status: "Active",
  },
  {
    lease_id: 8,
    resident_id: 8,
    apartment_id: 8,
    start_date: "2024-02-01",
    end_date: "2025-02-01",
    rent_amount: 1500.0,
    deposit_amount: 1500.0,
    status: "Active",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

const ViewContracts = () => {
  const [data, setData] = useState([]);

  const columns = [
    { field: "lease_id", headerName: "ID", width: 120 },
    { field: "resident_id", headerName: "RESIDENT ID", width: 120 },
    { field: "apartment_id", headerName: "APARTMENT ID", width: 140 },
    { field: "start_date", headerName: "START DATE", width: 140 },
    { field: "end_date", headerName: "END DATE", width: 140 },
    { field: "rent_amount", headerName: "RENT AMOUNT", width: 140 },
    { field: "deposit_amount", headerName: "DEPOSIT AMOUNT", width: 140 },
    { field: "status", headerName: "STATUS", width: 120 },
    {
      field: "action",
      headerName: "View",
      width: 160,
      renderCell: ({ row }) => (
        <>
          <Link to={`/customer/contracts/${row.lease_id}`}>
            <Button variant="outlined" size="small">
              View
            </Button>
          </Link>
        </>
      ),
    },
  ];

  useEffect(() => {
    const _data = contractData.map((contract) => ({
      ...contract,
      id: contract.lease_id,
    }));
    setData(_data);
  }, []);

  return (
    <div className="view-contracts">
      <h1>My Contracts</h1>

      <div className="view-contracts__actions">
        <form className="view-contracts__search-area">
          <TextField label="Search..." size="small" />
          <Button variant="contained">Search</Button>
        </form>
      </div>

      <div className="view-contracts__table">
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

export default ViewContracts;
