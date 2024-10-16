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
            <Route path="/customer" element={<Outlet />}>
              <Route path="register-utilities" element={<RegisterUtilities />} />
            </Route>
            <Route path="/admin" element={<Outlet />}>
              <Route path="timekeeping" element={<Timekeeping />} />
            </Route>
            <Route path="/apartment-manager" element={<Outlet />}>
              <Route path="lease-contract" element={<LeaseContract />} />
            </Route>
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
