import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { Link } from "react-router-dom";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';

const SiderComponent = () => {
  const routes = [
    {
      key: "dashboard",
      label: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      key: "financial",
      label: "Financial",
      icon: <CurrencyExchangeIcon />,
      path: "/financial",
    },
    {
      key: "residents",
      label: "Residents",
      icon: <LocalHotelIcon />,
      path: "/residents",
    },
    {
      key: "inventory",
      label: "Inventory",
      icon: <AddToPhotosIcon />,
      path: "/inventory",
    },
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
