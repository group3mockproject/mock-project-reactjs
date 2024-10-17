import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomeScreen from "@/screens/HomeScreen";
import SiderComponent from "@/components/SiderComponent";
import HeaderComponent from "@/components/HeaderComponent";

import ViewContracts from "@/screens/customer/view_contracts/ViewContracts";
import ContractDetail from "@/screens/customer/view_contracts/ContractDetail";
import MyComplaints from "@/screens/customer/my_complaints/MyComplaints";
import CreateComplaint from "@/screens/customer/my_complaints/CreateComplaint";
import ComplaintDetail from "@/screens/customer/my_complaints/ComplaintDetail";
import MaintenanceRequests from "@/screens/customer/maintenance_requests/MaintenanceRequests";
import CreateMaintenanceRequest from "@/screens/customer/maintenance_requests/CreateMaintenanceRequest";
import MaintenanceRequestDetail from "@/screens/customer/maintenance_requests/MaintenanceRequestDetail";

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
              <Route path="contracts" element={<ViewContracts />} />
              <Route path="contracts/:id" element={<ContractDetail />} />

              <Route path="complaints" element={<MyComplaints />} />
              <Route path="complaints/new" element={<CreateComplaint />} />
              <Route path="complaints/:id" element={<ComplaintDetail />} />

              <Route
                path="maintenance-requests/"
                element={<MaintenanceRequests />}
              />
              <Route
                path="maintenance-requests/new"
                element={<CreateMaintenanceRequest />}
              />
              <Route
                path="maintenance-requests/:id"
                element={<MaintenanceRequestDetail />}
              />
            </Route>

            {/* Example path Router here */}
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
