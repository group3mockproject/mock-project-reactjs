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
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
const SiderComponent = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const routes = [
    {
      key: "dashboard",
      label: "Manage Account",
      icon: <AccountBoxIcon />,
      path: "/manage_account",
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

    {
      key: "manageCadiden",
      label: "Manage Candidates",
      icon: <ManageAccountsIcon />,
      path: "/manage_candidates",
    }
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
