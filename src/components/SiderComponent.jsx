import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import DomainIcon from '@mui/icons-material/Domain';
import { Link } from "react-router-dom";

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
      key: "inventory",
      label: "Manage Apartment",
      icon: <DomainIcon />,
      path: "/MangerApartment",
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
