import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import SiderComponent from "@/components/SiderComponent";
import HeaderComponent from "@/components/HeaderComponent";
import RegisterUtilities from "@/screens/customer/register_utilities/RegisterUtilities";
import Timekeeping from "@/screens/admin/timekeeping/Timekeeping";
import LeaseContract from "@/screens/apartment_manager/LeaseContract/LeaseContract";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CustomerList from "@/screens/apartment_manager/customers/list/CustomerList";
import CustomerUpdate from "@/screens/apartment_manager/customers/update/CustomerUpdate";
import Income from "../screens/apartment_manager/incomes/Income";
import Expenses from "@/screens/apartment_manager/expenses/Expenses";
import ReviewCustomer from "@/screens/operations_manager/review_customer/ReviewCustomer";
import EditProfile from "@/screens/technical_staff/edit_profile/EditProfile";

const drawerWidth = 240;

export default function MainRoute() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Kiểm tra nếu là màn hình nhỏ
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`, // Chỉnh lại width
            marginLeft: isMobile ? 0 : `${drawerWidth}px`, // marginLeft thay ml để rõ ràng
          }}
        >
          <HeaderComponent onMenuClick={handleDrawerToggle} />{" "}
          {/* Truyền sự kiện mở Menu */}
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
          variant={isMobile ? "temporary" : "permanent"} // Chuyển từ permanent sang temporary nếu là mobile
          anchor="left"
          open={isMobile ? open : true}
          onClose={handleDrawerToggle} // Đóng drawer khi trên mobile
        >
          <Toolbar>
            <Typography>Logo</Typography>
          </Toolbar>
          <SiderComponent />
        </Drawer>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, overflow: "auto" }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/customer" element={<Outlet />}>
              <Route path="register-utilities" element={<RegisterUtilities />} />
            </Route>
            <Route path="/admin" element={<Outlet />}>
              <Route path="timekeeping" element={<Timekeeping />} />
            </Route>
            <Route path="/apartment-manager" element={<Outlet />}>
              <Route path="lease-contract" element={<LeaseContract />} />
              <Route path="customers" element={<CustomerList />} />
              <Route path="customers/:id" element={<CustomerUpdate />} />
              <Route path="incomes" element={<Income />} />
              <Route path="expenses" element={<Expenses />} />
            </Route>
            <Route path="/operations" element={<Outlet />}>
              <Route path="review-customers" element={<ReviewCustomer />} />
            </Route>
            <Route path="/technical-staff" element={<Outlet />}>
              <Route path="edit-profile" element={<EditProfile />} />
            </Route>
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
