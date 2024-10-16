import React from "react";
import { useParams } from "react-router-dom";
import "./ContractDetail.scss";

// Dữ liệu mẫu cho hợp đồng
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

const ContractDetail = () => {
  const { id } = useParams();
  const contract = contractData.find((item) => item.lease_id === parseInt(id));

  if (!contract) {
    return <div className="contract-detail__not-found">Contract not found</div>;
  }

  return (
    <div className="contract-detail">
      <h1 className="contract-detail__heading">
        Contract Detail #{contract.lease_id}
      </h1>
      <p>
        <b>Apartment ID:</b> {contract.apartment_id}
      </p>
      <p>
        <b>Rent Amount:</b> ${contract.rent_amount}
      </p>
      <p>
        <b>Deposit Amount:</b> ${contract.deposit_amount}
      </p>
      <p>
        <b>Status:</b> {contract.status}
      </p>
      <p>
        <b>Period:</b> {contract.start_date} to {contract.end_date}
      </p>
    </div>
  );
};

export default ContractDetail;
