import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "@/screens/HomeScreen";
import SiderComponent from "@/components/SiderComponent";
import HeaderComponent from "@/components/HeaderComponent";

import ViewContracts from "@/screens/resident/view_contracts/ViewContracts";
import ContractDetail from "@/screens/resident/view_contracts/ContractDetail";
import MyComplaints from "@/screens/resident/my_complaints/MyComplaints";
import CreateComplaint from "@/screens/resident/my_complaints/CreateComplaint";
import ComplaintDetail from "@/screens/resident/my_complaints/ComplaintDetail";
import MaintenanceRequests from "@/screens/resident/maintenance_requests/MaintenanceRequests";
import CreateMaintenanceRequest from "@/screens/resident/maintenance_requests/CreateMaintenanceRequest";
import MaintenanceRequestDetail from "@/screens/resident/maintenance_requests/MaintenanceRequestDetail";

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

            {/* resident/contracts */}
            <Route path="/resident/contracts" element={<ViewContracts />} />
            <Route
              path="/resident/contracts/:id"
              element={<ContractDetail />}
            />

            {/* resident/complaints */}
            <Route path="/resident/complaints" element={<MyComplaints />} />
            <Route
              path="/resident/complaints/new"
              element={<CreateComplaint />}
            />
            <Route
              path="/resident/complaints/:id"
              element={<ComplaintDetail />}
            />
            {/* resident/requests   Maintenance Requests*/}
            <Route
              path="/resident/requests/"
              element={<MaintenanceRequests />}
            />
            <Route
              path="/resident/requests/new"
              element={<CreateMaintenanceRequest />}
            />
            <Route
              path="/resident/requests/:id"
              element={<MaintenanceRequestDetail />}
            />
            {/* Example path Router here */}
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
