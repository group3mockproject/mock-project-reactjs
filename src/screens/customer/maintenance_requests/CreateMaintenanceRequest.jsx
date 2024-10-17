import React, { useState } from "react";
import { Button, TextField, MenuItem } from "@mui/material";
import "./CreateMaintenanceRequest.scss";

const priorities = ["Low", "Medium", "High"];

const CreateMaintenanceRequest = () => {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi request mới lên backend hoặc xử lý logic tạo request mới ở đây
    console.log({ description, priority });
    alert("Maintenance request created successfully!");
  };

  return (
    <div className="create-maintenance-request">
      <h1 className="create-maintenance-request__heading">
        New Maintenance Request
      </h1>
      <form
        className="create-maintenance-request__form"
        onSubmit={handleSubmit}
      >
        <div className="create-maintenance-request__field">
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="create-maintenance-request__field">
          <TextField
            select
            label="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            fullWidth
          >
            {priorities.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="create-maintenance-request__submit">
          <Button type="submit" variant="contained">
            Submit Request
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateMaintenanceRequest;
