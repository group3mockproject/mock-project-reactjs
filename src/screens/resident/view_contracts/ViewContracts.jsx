import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./ViewContracts.scss";

// Dữ liệu mẫu cho danh sách hợp đồng
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
    apartment_id: 1,
    start_date: "2024-02-01",
    end_date: "2025-02-01",
    rent_amount: 1500.0,
    deposit_amount: 1500.0,
    status: "Active",
  },
];

const ViewContracts = () => {
  const [contracts] = useState(contractData);

  return (
    <div className="view-contracts">
      <h1 className="view-contracts__heading">Contract List</h1>

      <TableContainer component={Paper} className="view-contracts__table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Lease ID</TableCell>
              <TableCell>Apartment ID</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Rent Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contracts.map((contract) => (
              <TableRow key={contract.lease_id}>
                <TableCell>{contract.lease_id}</TableCell>
                <TableCell>{contract.apartment_id}</TableCell>
                <TableCell>{contract.start_date}</TableCell>
                <TableCell>{contract.end_date}</TableCell>
                <TableCell>${contract.rent_amount}</TableCell>
                <TableCell>{contract.status}</TableCell>
                <TableCell>
                  <Link to={`/resident/contracts/${contract.lease_id}`}>
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
    </div>
  );
};

export default ViewContracts;
