import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  TextField,
  MenuItem,
  Modal,
  Typography,
  Box,
} from "@mui/material";
import "./ServiceContract.scss";

const initialServiceContracts = [
  {
    contract_id: 1,
    service_provider: "WaterWorks Ltd.",
    contract_type: "Utility",
    start_date: "2023-10-01",
    end_date: "2024-10-01",
    status: "Active",
    contract_terms: "Monthly billing with discounts for early payment",
  },
  {
    contract_id: 2,
    service_provider: "AquaPlumb Inc.",
    contract_type: "Utility",
    start_date: "2023-05-01",
    end_date: "2024-05-01",
    status: "Expiring",
    contract_terms: "Includes 24/7 customer support",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

const ServiceContract = () => {
  const [contracts, setContracts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredContracts, setFilteredContracts] = useState([]);
  const [selectedContract, setSelectedContract] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    const _data = initialServiceContracts.map((contract) => ({
      ...contract,
      id: contract.contract_id,
    }));
    setContracts(_data);
    setFilteredContracts(_data);
  }, []);

  const handleSearch = () => {
    const filtered = contracts.filter(
      (contract) =>
        contract.service_provider
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        contract.contract_type.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredContracts(filtered);
  };

  const handleCreateContract = () => {
    setIsCreateModalOpen(true);
  };

  const handleViewContract = (contract) => {
    setSelectedContract(contract);
    setIsViewModalOpen(true);
  };

  const handleEditContract = (contract) => {
    setSelectedContract(contract);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedContract(null);
    setIsViewModalOpen(false);
    setIsEditModalOpen(false);
    setIsCreateModalOpen(false);
  };

  const handleSaveEdit = (updatedContract) => {
    setContracts((prevContracts) =>
      prevContracts.map((contract) =>
        contract.contract_id === updatedContract.contract_id
          ? updatedContract
          : contract
      )
    );
    handleCloseModal();
  };

  const handleAddContract = (newContract) => {
    const newId = contracts.length + 1;
    const newContractWithId = { ...newContract, contract_id: newId, id: newId };
    setContracts((prevContracts) => [...prevContracts, newContractWithId]);
    setFilteredContracts((prevContracts) => [
      ...prevContracts,
      newContractWithId,
    ]);
    handleCloseModal();
  };

  const columns = [
    { field: "contract_id", headerName: "Contract ID", width: 150 },
    { field: "service_provider", headerName: "Provider", width: 200 },
    { field: "contract_type", headerName: "Type", width: 150 },
    { field: "start_date", headerName: "Start Date", width: 150 },
    { field: "end_date", headerName: "End Date", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: ({ row }) => (
        <>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleViewContract(row)}
          >
            View
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleEditContract(row)}
            sx={{ ml: 1 }}
          >
            Edit
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="service-contract">
      <h1>Service & Other Contracts Management</h1>

      <div className="service-contract__search">
        <form
          className="service-contract__search-area"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <TextField
            label="Search..."
            size="small"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Search
          </Button>
        </form>
        <Button variant="contained" onClick={handleCreateContract}>
          Create New Contract
        </Button>
      </div>

      <div className="service-contract__table">
        <DataGrid
          rows={filteredContracts}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          getRowId={(row) => row.contract_id}
          sx={{ border: 0 }}
        />
      </div>

      <ContractDetailModal
        isOpen={isViewModalOpen}
        onClose={handleCloseModal}
        contract={selectedContract}
      />

      <EditContractModal
        isOpen={isEditModalOpen}
        onClose={handleCloseModal}
        contract={selectedContract}
        onSave={handleSaveEdit}
      />

      <CreateContractModal
        isOpen={isCreateModalOpen}
        onClose={handleCloseModal}
        onAdd={handleAddContract}
      />
    </div>
  );
};

const ContractDetailModal = ({ isOpen, onClose, contract }) => (
  <Modal open={isOpen} onClose={onClose} className="contract-modal">
    <Box className="contract-modal__content">
      <Typography variant="h5">Contract Detail</Typography>
      {contract ? (
        <div>
          <p>
            <strong>ID:</strong> {contract.contract_id}
          </p>
          <p>
            <strong>Provider:</strong> {contract.service_provider}
          </p>
          <p>
            <strong>Type:</strong> {contract.contract_type}
          </p>
          <p>
            <strong>Start Date:</strong> {contract.start_date}
          </p>
          <p>
            <strong>End Date:</strong> {contract.end_date}
          </p>
          <p>
            <strong>Status:</strong> {contract.status}
          </p>
          <p>
            <strong>Terms:</strong> {contract.contract_terms}
          </p>
        </div>
      ) : (
        <p>No contract selected.</p>
      )}
      <Button variant="contained" onClick={onClose}>
        Close
      </Button>
    </Box>
  </Modal>
);

const EditContractModal = ({ isOpen, onClose, contract, onSave }) => {
  const [formData, setFormData] = useState(contract || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Modal open={isOpen} onClose={onClose} className="contract-modal">
      <Box className="contract-modal__content">
        <Typography variant="h5">Edit Contract</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Service Provider"
            name="service_provider"
            value={formData.service_provider || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            select
            label="Contract Type"
            name="contract_type"
            value={formData.contract_type}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{ textAlign: "left" }}
          >
            <MenuItem value="">Select Contract Type</MenuItem>
            <MenuItem value="Utility">Utility</MenuItem>
            <MenuItem value="Maintenance">Maintenance</MenuItem>
            <MenuItem value="Security">Security</MenuItem>
            <MenuItem value="Cleaning">Cleaning</MenuItem>
          </TextField>
          <TextField
            // label="Start Date"
            name="start_date"
            type="date"
            value={formData.start_date || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            // label="End Date"
            name="end_date"
            type="date"
            value={formData.end_date || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

const CreateContractModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    service_provider: "",
    contract_type: "",
    start_date: "",
    end_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
  };

  return (
    <Modal open={isOpen} onClose={onClose} className="contract-modal">
      <Box className="contract-modal__content">
        <Typography variant="h5">Create New Contract</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Service Provider"
            name="service_provider"
            value={formData.service_provider}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <TextField
            select
            label="Contract Type"
            name="contract_type"
            value={formData.contract_type}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            <MenuItem value="">Select Contract Type</MenuItem>
            <MenuItem value="Utility">Utility</MenuItem>
            <MenuItem value="Maintenance">Maintenance</MenuItem>
            <MenuItem value="Security">Security</MenuItem>
            <MenuItem value="Cleaning">Cleaning</MenuItem>
          </TextField>

          <TextField
            label="Start Date"
            name="start_date"
            type="date"
            value={formData.start_date}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="End Date"
            name="end_date"
            type="date"
            value={formData.end_date}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Create
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ServiceContract;
