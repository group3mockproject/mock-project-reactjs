import * as React from "react";
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
import MangerApartment from "@/screens/apartment_manager/manager_apartment/ManagerApartment.jsx";
import CustomerEditProfile from "@/screens/customer/customer_edit_profile/CustomerEditProfile.jsx";
import ViewPaymentHistory from "@/screens/customer/view_payment_history/ViewPaymentHistory.jsx";
import ViewFinesList from "@/screens/customer/view_fines_list/ViewFinesList.jsx";
import RegisterUtilities from "@/screens/customer/register_utilities/RegisterUtilities.jsx";
import ServiceDetails from "@/screens/customer/register_utilities/service_details/ServiceDetails.jsx";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Manage_Account from "@/screens/admin/manage_account/Manage_Account";
import Manage_Candidates from "@/screens/admin/manage_candidates/Manage_Candidates";
import Timekeeping from "@/screens/admin/timekeeping/Timekeeping";
import LeaseContract from "@/screens/apartment_manager/LeaseContract/LeaseContract";
import CustomerList from "@/screens/apartment_manager/customers/list/CustomerList";
import CustomerUpdate from "@/screens/apartment_manager/customers/update/CustomerUpdate";
import Income from "../screens/apartment_manager/incomes/Income";
import Expenses from "@/screens/apartment_manager/expenses/Expenses";
import ReviewCustomer from "@/screens/operations_manager/review_customer/ReviewCustomer";
import EditProfile from "@/screens/technical_staff/edit_profile/EditProfile";

import ViewContracts from "@/screens/customer/view_contracts/ViewContracts";
import MyComplaints from "@/screens/customer/my_complaints/MyComplaints";
import MaintenanceRequests from "@/screens/customer/maintenance_requests/MaintenanceRequests";
import EditProfileApartmentManager from "@/screens/apartment_manager/edit_profile/EditProfile";
import EditProfileOperationManager from "@/screens/operations_manager/edit_profile/EditProfile";
import ReviewEquipment from "@/screens/operations_manager/review_equipment/ReviewEquipment";
import DetailReviewEquipment from "@/screens/operations_manager/review_equipment/DetailReviewEquipment";

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
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, overflow: "auto" }}
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

            <Route path="/customer" element={<Outlet />}>
              <Route path="contracts" element={<ViewContracts />} />
              <Route path="complaints" element={<MyComplaints />} />
              <Route path="maintenance-requests" element={<MaintenanceRequests />} />
            </Route>
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
