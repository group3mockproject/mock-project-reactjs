import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import SiderComponent from "@/components/SiderComponent";
import HeaderComponent from "@/components/HeaderComponent";
import {EditResident} from "@/screens/residents/editResident/EditResident.jsx";

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
            <Route path="/residents/:id" element={<EditResident />}></Route>
            {/* Example path Router here */}
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
