import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField, Modal, Typography } from "@mui/material";
import useFetch from "@/hooks/useFetch"; // Sử dụng hook useFetch
import axios from "axios"; // Thêm axios cho việc gọi chi tiết hợp đồng
import "./ViewContracts.scss";

// Giả định user_id được truyền từ props hoặc lấy từ auth context
const ViewContracts = ({ user_id = 1 }) => {
  const {
    data: contracts,
    isLoading,
    error,
    setData: setContracts,
  } = useFetch({
    url: `${import.meta.env.VITE_API_CUSTOMER_CONTRACTS}`,
  });
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContract, setSelectedContract] = useState(null);
  const [contractDetail, setContractDetail] = useState(null); // Để chứa chi tiết hợp đồng
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailLoading, setIsDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState(null);

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
          onClick={() => handleViewContract(row.lease_id)}
        >
          View
        </Button>
      ),
    },
  ];

  // Gán dữ liệu ban đầu sau khi load từ useFetch
  useEffect(() => {
    if (contracts) {
      const _data = contracts.map((contract) => ({
        ...contract,
        id: contract.lease_id,
      }));
      setFilteredData(_data);
    }
  }, [contracts]);

  // Xử lý tìm kiếm
  const handleSearch = () => {
    const searchResults = contracts.filter(
      (contract) =>
        contract.lease_id.toString().includes(searchTerm) ||
        contract.resident_id.toString().includes(searchTerm) ||
        contract.apartment_id.toString().includes(searchTerm)
    );
    setFilteredData(searchResults);
  };

  const handleViewContract = async (lease_id) => {
    setSelectedContract(lease_id);
    setIsModalOpen(true);
    setIsDetailLoading(true);
    console.log(lease_id);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_CUSTOMER_CONTRACTS}/${lease_id}`
      );
      setContractDetail(response.data);
    } catch (e) {
      setDetailError(e);
    } finally {
      setIsDetailLoading(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedContract(null);
    setContractDetail(null);
    setIsModalOpen(false);
  };

  if (isLoading) return <p>Loading contracts...</p>;
  if (error) return <p>Error loading contracts: {error.message}</p>;

  return (
    <div className="view-contracts">
      <h1>My Contracts</h1>

      <div className="view-contracts__actions">
        <form
          className="view-contracts__search-area"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <TextField
            label="Search..."
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </form>
      </div>

      <div className="view-contracts__table">
        <DataGrid
          rows={filteredData}
          columns={columns}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </div>

      <ContractDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        contract={contractDetail}
        isLoading={isDetailLoading}
        error={detailError}
      />
    </div>
  );
};

const ContractDetailModal = ({
  isOpen,
  onClose,
  contract,
  isLoading,
  error,
}) => (
  <Modal open={isOpen} onClose={onClose} className="contract-modal">
    <div className="contract-modal__content">
      <Typography variant="h5">Contract Detail</Typography>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading contract details: {error.message}</p>
      ) : contract ? (
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
