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
import {Payments} from "@/screens/customer/payments/Payments.jsx";
import {ConfirmPay} from "@/screens/customer/payments/ConfirmPay.jsx";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {ApartmentList} from "@/screens/customer/rentAnApartment/ApartmentList.jsx";
import {ApartmentDetail} from "@/screens/customer/rentAnApartment/ApartmentDetail.jsx";
import {ModalsPictures} from "@/components/modals/ModalsPictures.jsx";
import {usePictures} from "@/core/contexts/ModalPicturesContext.jsx";
import {FinesList} from "@/screens/apartment_manager/manage_fines/FinesList.jsx";
import {FinesCreate} from "@/screens/apartment_manager/manage_fines/FinesCreate.jsx";
import {MaintenanceSchedule} from "@/screens/apartment_manager/manage-maintainance-schedule/MaintenanceSchedule.jsx";
import {ManageEvent} from "@/screens/apartment_manager/manage_event/ManageEvent.jsx";
import {ManageBuildings} from "@/screens/landlord/manage-buildings/ManageBuildings.jsx";
import {BuildingEdit} from "@/screens/landlord/manage-buildings/BuildingEdit.jsx";

const drawerWidth = 240;

export default function MainRoute() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Kiểm tra nếu là màn hình nhỏ
  const [open, setOpen] = React.useState(false);

  const {
      isOpen,
      pictures,
      toggleIsOpenModal,
  } = usePictures();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

    const handleClosePictureModal = () => {
        toggleIsOpenModal(false);
    }

  return (
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
              <Route path="/customers/payments/pay" element={<ConfirmPay/>}></Route>
              <Route path="/customers/payments" element={<Payments/>}></Route>
              <Route path="/customers/rent-apartment" element={<ApartmentList/>}></Route>
              <Route path="/customers/rent-apartment/:id" element={<ApartmentDetail/>}></Route>
              <Route path="/apartment-manager/fines" element={<FinesList/>}></Route>
              <Route path="/apartment-manager/fines/create" element={<FinesCreate/>}></Route>
              <Route path="/apartment-manager/maintenance-schedule" element={<MaintenanceSchedule/>}></Route>
              <Route path="/apartment-manager/manage-events" element={<ManageEvent/>}></Route>
              <Route path="/landlord/manage-buildings" element={<ManageBuildings/>}></Route>
              <Route path="/landlord/manage-buildings/create" element={<BuildingEdit/>}></Route>
              <Route path="/landlord/manage-buildings/:id/edit" element={<BuildingEdit/>}></Route>
          </Routes>
        </Box>
          <ModalsPictures
              isOpen={isOpen}
              onClose={handleClosePictureModal}
              listPictures={pictures}
          />
      </Box>
  );
}
