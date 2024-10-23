import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Routes, Route, Outlet } from "react-router-dom"; // Bỏ BrowserRouter

import SiderComponent from "@/components/SiderComponent";
import HeaderComponent from "@/components/HeaderComponent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles"; 

import LeaseContract from "@/screens/apartment_manager/LeaseContract/LeaseContract";
import CustomerList from "@/screens/apartment_manager/customers/list/CustomerList";
import CustomerUpdate from "@/screens/apartment_manager/customers/update/CustomerUpdate";
import Income from "../screens/apartment_manager/incomes/Income";
import Expenses from "@/screens/apartment_manager/expenses/Expenses";
import ReviewCustomer from "@/screens/operations_manager/review_customer/ReviewCustomer";
import EditProfile from "@/screens/technical_staff/edit_profile/EditProfile";
import HomeScreen from "@/screens/home/HomeScreen";
import ViewContracts from "@/screens/customer/view_contracts/ViewContracts";
import MyComplaints from "@/screens/customer/my_complaints/MyComplaints";
import MaintenanceRequests from "@/screens/customer/maintenance_requests/MaintenanceRequests";
import EditProfileApartmentManager from "@/screens/apartment_manager/edit_profile/EditProfile";
import EditProfileOperationManager from "@/screens/operations_manager/edit_profile/EditProfile";
import ReviewEquipment from "@/screens/operations_manager/review_equipment/ReviewEquipment";
import DetailReviewEquipment from "@/screens/operations_manager/review_equipment/DetailReviewEquipment";

import { Payments } from "@/screens/customer/payments/Payments.jsx";
import { ConfirmPay } from "@/screens/customer/payments/ConfirmPay.jsx";
import { ApartmentList } from "@/screens/customer/rentAnApartment/ApartmentList.jsx";
import { ApartmentDetail } from "@/screens/customer/rentAnApartment/ApartmentDetail.jsx";
import { FinesList } from "@/screens/apartment_manager/manage_fines/FinesList.jsx";
import { FinesCreate } from "@/screens/apartment_manager/manage_fines/FinesCreate.jsx";
import { MaintenanceSchedule } from "@/screens/apartment_manager/manage-maintainance-schedule/MaintenanceSchedule.jsx";
import { ManageEvent } from "@/screens/apartment_manager/manage_event/ManageEvent.jsx";
import { ManageBuildings } from "@/screens/landlord/manage-buildings/ManageBuildings.jsx";
import { BuildingEdit } from "@/screens/landlord/manage-buildings/BuildingEdit.jsx";
import Timekeeping from "@/screens/admin/timekeeping/Timekeeping";

const drawerWidth = 240;

export default function MainRoute() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`,
          marginLeft: isMobile ? 0 : `${drawerWidth}px`,
        }}
      >
        <HeaderComponent onMenuClick={handleDrawerToggle} />
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={isMobile ? open : true}
        onClose={handleDrawerToggle}
      >
        <Toolbar>
          <Typography>Logo</Typography>
        </Toolbar>
        <SiderComponent />
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/apartment-manager" element={<Outlet />}>
            <Route path="lease-contract" element={<LeaseContract />} />
            <Route path="customers" element={<CustomerList />} />
            <Route path="customers/:id" element={<CustomerUpdate />} />
            <Route path="incomes" element={<Income />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="edit-profile" element={<EditProfileApartmentManager />} />
          </Route>
          <Route path="/operations" element={<Outlet />}>
            <Route path="review-customers" element={<ReviewCustomer />} />
            <Route path="edit-profile" element={<EditProfileOperationManager />} />
            <Route path="review-equipment" element={<ReviewEquipment />} />
            <Route path="review-equipment/:id" element={<DetailReviewEquipment />} />
          </Route>
          <Route path="/technical-staff" element={<Outlet />}>
            <Route path="edit-profile" element={<EditProfile />} />
          </Route>
          <Route path="/admin" element={<Outlet />}>
            <Route path="timekeeping" element={<Timekeeping />} />
          </Route>
            <Route path="/customers" element={<Outlet />}>
                <Route path="payments/pay" element={<ConfirmPay />} />
                <Route path="payments" element={<Payments />} />
                <Route path="rent-apartment" element={<ApartmentList />} />
                <Route path="rent-apartment/:id" element={<ApartmentDetail />} />
            </Route>
            <Route path="/apartment-manager" element={<Outlet />}>
                <Route path="fines" element={<FinesList />} />
                <Route path="fines/create" element={<FinesCreate />} />
                <Route path="maintenance-schedule" element={<MaintenanceSchedule />} />
                <Route path="manage-events" element={<ManageEvent />} />
            </Route>

            <Route path="/landlord" element={<Outlet />}>
                <Route path="manage-buildings" element={<ManageBuildings />} />
                <Route path="manage-buildings/create" element={<BuildingEdit />} />
                <Route path="manage-buildings/:id/edit" element={<BuildingEdit />} />
            </Route>
        </Routes>
      </Box>
    </Box>
  );
}
