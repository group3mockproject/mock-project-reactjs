import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
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
    <div className="view-contract">
      <h1 className="view-contract__heading">Contract List</h1>
      <p className="view-contract__desc">
        {/* <i>Click on a contract to view details</i> */}
      </p>

      <div className="view-contract__list">
        {contracts.map((contract) => (
          <ContractCard key={contract.lease_id} {...contract} />
        ))}
      </div>
    </div>
  );
};

const ContractCard = ({
  lease_id,
  apartment_id,
  start_date,
  end_date,
  rent_amount,
  status,
}) => {
  return (
    <div className="view-contracts__card">
      <div className="view-contracts__card-header">
        <div>
          <h3>Contract #{lease_id}</h3>
          <p>Apartment ID: {apartment_id}</p>
          <p>
            Rent Amount: {rent_amount}$, Status: {status}
          </p>
        </div>
      </div>
      <div className="view-contracts__card-footer">
        <p>
          Period: {start_date} to {end_date}
        </p>
        <Link to={`/customer/contracts/${lease_id}`}>
          <Button className="view-contracts__button" variant="contained">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ViewContracts;
