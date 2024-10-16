import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./CreateComplaint.scss";

const CreateComplaint = () => {
  const [complaintType, setComplaintType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New Complaint:", { complaintType, description });
  };

  return (
    <div className="create-complaint">
      <h1>Create New Complaint</h1>
      <form onSubmit={handleSubmit} className="create-complaint__form">
        <TextField
          label="Complaint Type"
          value={complaintType}
          onChange={(e) => setComplaintType(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={4}
          required
        />
        <Button
          type="submit"
          variant="contained"
          className="create-complaint__button"
        >
          Submit Complaint
        </Button>
      </form>
    </div>
  );
};

export default CreateComplaint;
