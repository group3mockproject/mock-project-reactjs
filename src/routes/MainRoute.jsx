import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/home/HomeScreen.jsx";
import SiderComponent from "@/components/SiderComponent";
import HeaderComponent from "@/components/HeaderComponent";
import MangerApartment from "@/screens/apartment_manager/manager_apartment/ManagerApartment.jsx";
import CustomerEditProfile from "@/screens/customer/customer_edit_profile/CustomerEditProfile.jsx";
import ViewPaymentHistory from "@/screens/customer/view_payment_history/ViewPaymentHistory.jsx";
import ViewFinesList from "@/screens/customer/view_fines_list/ViewFinesList.jsx";
import RegisterUtilities from "@/screens/customer/register_utilities/RegisterUtilities.jsx";
import Card from "@/screens/customer/register_utilities/service_details/card/Card.jsx";
import ServiceDetails from "@/screens/customer/register_utilities/service_details/ServiceDetails.jsx";

const drawerWidth = 240;

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <HeaderComponent />
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
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <Typography>Logo</Typography>
          </Toolbar>
          {/* Past Sider-------------------- */}
          <SiderComponent />
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
              <Route path="/MangerApartment" element={<MangerApartment />}></Route>
              <Route path="/CustomerEditProfile" element={<CustomerEditProfile />}></Route>
              <Route path="/ViewPaymentHistory" element={<ViewPaymentHistory />}></Route>
              <Route path="/ViewFinesList" element={<ViewFinesList />}></Route>
              <Route path="/RegisterUtilities" element={<RegisterUtilities />}></Route>
              <Route path="/ServiceDetails" element={<ServiceDetails />}></Route>
            {/* Example path Router here */}
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
