import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  TextField,
  Modal,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import "./ReviewAllContracts.scss";

const contractData = {
  leaseContracts: [
    {
      contract_id: 1,
      type: "Lease",
      resident_id: 1,
      apartment_id: 101,
      start_date: "2023-01-01",
      end_date: "2024-01-01",
      rent_amount: 1200.0,
      deposit_amount: 1200.0,
      status: "Active",
    },
    {
      contract_id: 2,
      type: "Lease",
      resident_id: 2,
      apartment_id: 102,
      start_date: "2023-05-01",
      end_date: "2024-05-01",
      rent_amount: 1500.0,
      deposit_amount: 1500.0,
      status: "Pending",
    },
  ],
  utilityContracts: [
    {
      contract_id: 3,
      type: "Utility",
      utility_name: "Electricity",
      resident_id: 1,
      start_date: "2023-01-01",
      end_date: "2024-01-01",
      status: "Active",
      company: "Electric Co.",
    },
    {
      contract_id: 4,
      type: "Utility",
      utility_name: "Water",
      resident_id: 2,
      start_date: "2023-06-01",
      end_date: "2024-06-01",
      status: "Expired",
      company: "Water Co.",
    },
  ],
  equipmentContracts: [
    {
      contract_id: 5,
      type: "Equipment",
      equipment_name: "Elevator",
      apartment_id: 101,
      start_date: "2022-01-01",
      end_date: "2026-01-01",
      cost: 5000,
      status: "Active",
      company: "Elevator Corp.",
    },
  ],
  employeeContracts: [
    {
      contract_id: 6,
      type: "Employee",
      employee_id: 1,
      employee_name: "John Doe",
      position: "Manager",
      start_date: "2021-01-01",
      end_date: "2025-01-01",
      salary: 80000,
      status: "Active",
    },
  ],
};

const ReviewAllContracts = () => {
  const [contractType, setContractType] = useState("Lease");
  const [filteredContracts, setFilteredContracts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContract, setSelectedContract] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle contract type selection and filter contracts
  useEffect(() => {
    let contracts =
      contractType === "Lease"
        ? contractData.leaseContracts
        : contractType === "Utility"
        ? contractData.utilityContracts
        : contractType === "Equipment"
        ? contractData.equipmentContracts
        : contractData.employeeContracts;

    // Apply search filter
    if (searchTerm) {
      contracts = contracts.filter((contract) =>
        Object.values(contract)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }
    setFilteredContracts(contracts);
  }, [contractType, searchTerm]);

  const handleViewContract = (contract) => {
    setSelectedContract(contract);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedContract(null);
    setIsModalOpen(false);
  };

  // Columns will be dynamic based on contract type
  const columns = [
    { field: "contract_id", headerName: "Contract ID", width: 120 },
    ...(contractType === "Lease"
      ? [
          { field: "resident_id", headerName: "Resident ID", width: 120 },
          { field: "apartment_id", headerName: "Apartment ID", width: 140 },
          { field: "start_date", headerName: "Start Date", width: 140 },
          { field: "end_date", headerName: "End Date", width: 140 },
          { field: "rent_amount", headerName: "Rent Amount", width: 140 },
          { field: "deposit_amount", headerName: "Deposit Amount", width: 140 },
          { field: "status", headerName: "Status", width: 120 },
        ]
      : contractType === "Utility"
      ? [
          { field: "resident_id", headerName: "Resident ID", width: 120 },
          { field: "utility_name", headerName: "Utility", width: 140 },
          { field: "start_date", headerName: "Start Date", width: 140 },
          { field: "end_date", headerName: "End Date", width: 140 },
          { field: "company", headerName: "Company", width: 140 },
          { field: "status", headerName: "Status", width: 120 },
        ]
      : contractType === "Equipment"
      ? [
          { field: "apartment_id", headerName: "Apartment ID", width: 140 },
          { field: "equipment_name", headerName: "Equipment", width: 140 },
          { field: "start_date", headerName: "Start Date", width: 140 },
          { field: "end_date", headerName: "End Date", width: 140 },
          { field: "company", headerName: "Company", width: 140 },
          { field: "status", headerName: "Status", width: 120 },
        ]
      : [
          { field: "employee_name", headerName: "Employee Name", width: 140 },
          { field: "position", headerName: "Position", width: 140 },
          { field: "start_date", headerName: "Start Date", width: 140 },
          { field: "end_date", headerName: "End Date", width: 140 },
          { field: "salary", headerName: "Salary", width: 140 },
          { field: "status", headerName: "Status", width: 120 },
        ]),
    {
      field: "action",
      headerName: "Actions",
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

  return (
    <div className="review-all-contracts">
      <h1>Review All Contracts</h1>

      {/* Contract Type Selection and Search Input */}
      <div className="review-all-contracts__actions">
        <FormControl size="small" className="review-all-contracts__select">
          <InputLabel>Contract Type</InputLabel>
          <Select
            value={contractType}
            onChange={(e) => setContractType(e.target.value)}
            label="Contract Type"
          >
            <MenuItem value="Lease">Lease Contracts</MenuItem>
            <MenuItem value="Utility">Utility Contracts</MenuItem>
            <MenuItem value="Equipment">Equipment Contracts</MenuItem>
            <MenuItem value="Employee">Employee Contracts</MenuItem>
          </Select>
        </FormControl>

        <TextField
          size="small"
          label="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="review-all-contracts__search"
        />
      </div>

      <div className="review-all-contracts__table">
        <DataGrid
          rows={filteredContracts.map((contract) => ({
            ...contract,
            id: contract.contract_id,
          }))}
          columns={columns}
          pageSize={5}
          sx={{ border: 0 }}
        />
      </div>

      {/* Contract Detail Modal */}
      <ContractDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        contract={selectedContract}
      />
    </div>
  );
};

const ContractDetailModal = ({ isOpen, onClose, contract }) => {
  const handleExportPDF = () => {
    // export PDF
  };

  return (
    <Modal open={isOpen} onClose={onClose} className="contract-modal">
      <div className="contract-modal__content">
        <Typography variant="h5">Contract Detail</Typography>
        {contract ? (
          <div>
            <p>
              <strong>Contract ID:</strong> {contract.contract_id}
            </p>
            <p>
              <strong>Contract Type:</strong> {contract.type}
            </p>
            {contract.resident_id && (
              <p>
                <strong>Resident ID:</strong> {contract.resident_id}
              </p>
            )}
            {contract.apartment_id && (
              <p>
                <strong>Apartment ID:</strong> {contract.apartment_id}
              </p>
            )}
            {contract.utility_name && (
              <p>
                <strong>Utility:</strong> {contract.utility_name}
              </p>
            )}
            {contract.company && (
              <p>
                <strong>Company:</strong> {contract.company}
              </p>
            )}
            <p>
              <strong>Start Date:</strong> {contract.start_date}
            </p>
            <p>
              <strong>End Date:</strong> {contract.end_date}
            </p>
            {contract.rent_amount && (
              <p>
                <strong>Rent Amount:</strong> ${contract.rent_amount}
              </p>
            )}
            {contract.deposit_amount && (
              <p>
                <strong>Deposit Amount:</strong> ${contract.deposit_amount}
              </p>
            )}
            {contract.cost && (
              <p>
                <strong>Cost:</strong> ${contract.cost}
              </p>
            )}
            {contract.salary && (
              <p>
                <strong>Salary:</strong> ${contract.salary}
              </p>
            )}
            <p>
              <strong>Status:</strong> {contract.status}
            </p>
          </div>
        ) : (
          <p>No contract selected.</p>
        )}
        <div className="contract-modal__actions">
          <Button
            variant="contained"
            onClick={handleExportPDF}
            sx={{
              backgroundColor: "#DB0001",
              color: "white",
              "&:hover": {
                backgroundColor: "#E83E34",
              },
            }}
          >
            Export PDF
          </Button>
          <Button variant="contained" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ReviewAllContracts;
