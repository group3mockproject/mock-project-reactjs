import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";  // Import Collapse for submenu
import HomeIcon from "@mui/icons-material/Home";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { ExpandLess, ExpandMore } from "@mui/icons-material";  // Icons for expand/collapse
import { Link } from "react-router-dom";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import ApartmentIcon from '@mui/icons-material/Apartment';

const SiderComponent = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

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
      key: "customer",
      label: "Customers",
      icon: <LocalHotelIcon />,
      children: [
        {
          key: "payments",
          label: "Payment list & Pay fee",
          path: "/customers/payments",
        },
        {
          key: "rent-an-apartment",
          label: "Rent an apartment",
          path: "/customers/rent-apartment",
        },
      ]
    },
    {
      key: "apartment-manager",
      label: "Apartment Manager",
      icon: <ApartmentIcon />,
      children: [
        {
          key: "manage-fines",
          label: "Manage Fines",
          path: "/apartment-manager/fines",
        },
        {
          key: "maintenance-schedule",
          label: "Maintenance Schedules",
          path: "/apartment-manager/maintenance-schedule",
        },
        {
          key: "manage-events",
          label: "Manage Events",
          path: "/apartment-manager/manage-events",
        },
      ]
    },
    {
      key: "landlord",
      label: "Landlord",
      icon: <ApartmentIcon />,
      children: [
        {
          key: "manage-buildings",
          label: "Manage Buildings",
          path: "/landlord/manage-buildings",
        },

      ]
    },
    {
      key: "inventory",
      label: "Inventory",
      icon: <AddToPhotosIcon />,
      path: "/inventory",
      children: [
        {
          key: "inventory-overview",
          label: "Inventory Overview",
          path: "/inventory/overview",
        },
        {
          key: "inventory-details",
          label: "Inventory Details",
          path: "/inventory/details",
        },
      ],
    },
  ];

  return (
    <div>
      <List>
        {routes.map((item) => (
          <div key={item.key}>
            <ListItem disablePadding>
              <ListItemButton component={Link} to={item.path} onClick={item.children ? handleClick : null}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
                {item.children ? (open ? <ExpandLess /> : <ExpandMore />) : null}
              </ListItemButton>
            </ListItem>

            {item.children && (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((child) => (
                    <ListItem key={child.key} disablePadding>
                      <ListItemButton component={Link} to={child.path} sx={{ pl: 4 }}>
                        <ListItemText primary={child.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </div>
  );
};

export default SiderComponent;
