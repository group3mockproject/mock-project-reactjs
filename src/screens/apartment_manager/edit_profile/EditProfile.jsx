import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import "./EditProfile.scss";

const EditProfile = () => {
  const showPassword = false;
  console.log("EditProfile");
  return (
    <form className="apartment_manager_edit_profile">
      <div className="apartment_manager_edit_profile__profile-picture">
        <h1>EDIT PROFILE</h1>
        <img
          src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
          alt="Profile"
        />
        <Button>Upload Image</Button>
      </div>

      <div className="apartment_manager_edit_profile__fields">
        <TextField required label="First Name" />
        <TextField required label="Last Name" />
        <TextField required label="Email" />
        <FormControl>
          <InputLabel>Gender</InputLabel>
          <Select required value="male" label="Gender">
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
        <TextField required label="Contact Number" type="number" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker required label="Date of Birth" />
        </LocalizationProvider>
        <TextField required label="SSN" />
        <TextField required label="City" />
        <TextField required label="State" />
        <TextField required label="Address" />
        <FormControl variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel>Confirm Password</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>

        <div className="apartment_manager_edit_profile__button-group">
          <Button variant="contained" sx={{ background: "#ff2a44" }}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ background: "#00B087" }}
          >
            Update
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
