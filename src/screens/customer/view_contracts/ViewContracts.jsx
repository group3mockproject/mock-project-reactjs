import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField, Modal, Typography } from "@mui/material";
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
    start_date: "2024-01-01",
    end_date: "2025-01-01",
    rent_amount: 1500.0,
    deposit_amount: 1500.0,
    status: "Active",
  },
  {
    lease_id: 3,
    resident_id: 3,
    apartment_id: 3,
    start_date: "2024-01-01",
    end_date: "2025-01-01",
    rent_amount: 1500.0,
    deposit_amount: 1500.0,
    status: "Active",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

const ViewContracts = () => {
  const [data, setData] = useState([]);
  const [selectedContract, setSelectedContract] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <Button
          variant="outlined"
          size="small"
          onClick={() => handleViewContract(row)}
        >
          View
        </Button>
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

  const handleViewContract = (contract) => {
    setSelectedContract(contract);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedContract(null);
    setIsModalOpen(false);
  };

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

      <ContractDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        contract={selectedContract}
      />
    </div>
  );
};

const ContractDetailModal = ({ isOpen, onClose, contract }) => (
  <Modal open={isOpen} onClose={onClose} className="contract-modal">
    <div className="contract-modal__content">
      <Typography variant="h5">Contract Detail</Typography>
      {contract ? (
        <div>
          <p>
            <strong>ID:</strong> {contract.lease_id}
          </p>
          <p>
            <strong>Resident ID:</strong> {contract.resident_id}
          </p>
          <p>
            <strong>Apartment ID:</strong> {contract.apartment_id}
          </p>
          <p>
            <strong>Start Date:</strong> {contract.start_date}
          </p>
          <p>
            <strong>End Date:</strong> {contract.end_date}
          </p>
          <p>
            <strong>Rent Amount:</strong> ${contract.rent_amount}
          </p>
          <p>
            <strong>Deposit Amount:</strong> ${contract.deposit_amount}
          </p>
          <p>
            <strong>Status:</strong> {contract.status}
          </p>
        </div>
      ) : (
        <p>No contract selected.</p>
      )}
      <Button variant="contained" onClick={onClose}>
        Close
      </Button>
    </div>
  </Modal>
);

export default ViewContracts;
