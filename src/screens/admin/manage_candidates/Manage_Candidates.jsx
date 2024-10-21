import React from "react";
import "./Manage_Candidates.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const Manage_Candidates = () => {
  return (
    <div>
      <div>
        <h1 className="title_header">Job Openings</h1>
        <p
          style={{
            margin: "5px 0",
            display: "flex",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: "15px" }} />
          Back
        </p>
      </div>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <DatePicker
              sx={{
                "& .MuiInputBase-root": {
                  height: "30px", // edit here 
                  fontSize: "12px", // Adjust font size here
                },
              }}
            />
            <DatePicker
              sx={{
                "& .MuiInputBase-root": {
                  height: "30px", // Adjust height here
                  fontSize: "12px", // Adjust font size here
                },
              }}
            />
          </Box>
        </LocalizationProvider>
      </Box>
    </div>
  );
};

export default Manage_Candidates;
