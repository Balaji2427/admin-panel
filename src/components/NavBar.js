import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { useNavigate } from "react-router-dom";

import { useTheme } from "../ThemeContext"; 

import Brightness4Icon from "@mui/icons-material/Brightness4";

import Brightness7Icon from "@mui/icons-material/Brightness7";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const { darkMode, toggleTheme } = useTheme(); 

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button onClick={() => navigate("/")}>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button onClick={() => navigate("/crud")}>
          <ListItemText primary="CRUD Operations" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>

        <IconButton color="inherit" onClick={toggleTheme}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        transitionDuration={{ enter: 200, exit: 200 }}
      >
        {list()}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
