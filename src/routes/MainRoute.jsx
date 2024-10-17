import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import SiderComponent from "@/components/SiderComponent";
import HeaderComponent from "@/components/HeaderComponent";
import {EditResident} from "@/screens/customer/editResident/EditResident.jsx";
import {Payments} from "@/screens/customer/payments/Payments.jsx";
import {ConfirmPay} from "@/screens/customer/payments/ConfirmPay.jsx";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {ApartmentList} from "@/screens/customer/rentAnApartment/ApartmentList.jsx";
import {ApartmentDetail} from "@/screens/customer/rentAnApartment/ApartmentDetail.jsx";

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
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
              <Route path="/residents/:id/edit" element={<EditResident/>}></Route>
              <Route path="/residents/payments/pay" element={<ConfirmPay/>}></Route>
              <Route path="/residents/payments" element={<Payments/>}></Route>
              <Route path="/residents/rent-apartment" element={<ApartmentList/>}></Route>
              <Route path="/residents/rent-apartment/:id" element={<ApartmentDetail/>}></Route>
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
