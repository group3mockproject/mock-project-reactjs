import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import DomainIcon from '@mui/icons-material/Domain';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from "react-router-dom";
import PaymentsIcon from '@mui/icons-material/Payments';
import BuildIcon from '@mui/icons-material/Build';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const SiderComponent = () => {
  const routes = [
    {
      key: "dashboard",
      label: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      key: "inventory",
      label: "Inventory",
      icon: <AddToPhotosIcon />,
      path: "/inventory",
    },
    {
      key: "manage_apartment",
      label: "Manage Apartment",
      icon: <DomainIcon />,
      path: "/MangerApartment",
    },
    {
      key: "customer_edit_profile",
      label: "Customer Edit Profile",
      icon: <ManageAccountsIcon />,
      path: "/CustomerEditProfile",
    }
    ,
    {
      key: "View_payment_history",
      label: "View Payment History",
      icon: <PaymentsIcon />,
      path: "/ViewPaymentHistory",
    } ,
    {
      key: "view_fines_list",
      label: "View Fines List",
      icon: <BuildIcon />,
      path: "/ViewFinesList",
    },
    {
      key: "register_utilities",
      label: "Register Utilities",
      icon: <FitnessCenterIcon />,
      path: "/RegisterUtilities",
    }
  ];

  return (
    <div>
      <List>
        {routes.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SiderComponent;
