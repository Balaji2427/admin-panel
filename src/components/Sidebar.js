import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableChartIcon from "@mui/icons-material/TableChart";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useTheme } from "@mui/material/styles"; 

const Sidebar = ({ setActiveSection, open, handleDrawerToggle }) => {
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const theme = useTheme(); 

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setActiveSection?.(section);
  };

  const drawerBackground =
    theme.palette.mode === "dark"
      ? "linear-gradient(135deg, #1c1c1c, #424242)" 
      : "linear-gradient(135deg, #42a5f5, #478ed1)"; 

  const drawerTextColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 240 : 64,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 240 : 64,
          transition: "width 0.3s",
          overflowX: "hidden",
          background: drawerBackground, 
        },
      }}
    >
      <Box
        display="flex"
        justifyContent={open ? "flex-end" : "center"}
        alignItems="center"
        height="64px"
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: drawerTextColor }}
        >
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />
      <List>
        <ListItem
          button
          onClick={() => handleSectionClick("dashboard")}
          sx={{
            color: drawerTextColor, 
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)" 
                  : "rgba(0, 0, 0, 0.1)", 
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: "4px",
              backgroundColor:
                selectedSection === "dashboard" ? "#ffd54f" : "transparent",
              transition: "background-color 0.3s",
            },
          }}
        >
          <ListItemIcon sx={{ color: drawerTextColor }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            primary={open ? "Dashboard" : ""}
            sx={{
              opacity: open ? 1 : 0,
              transition: "opacity 0.3s",
              position: "relative",
            }}
          />
        </ListItem>

        <ListItem
          button
          onClick={() => handleSectionClick("crud")}
          sx={{
            color: drawerTextColor,
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)" 
                  : "rgba(0, 0, 0, 0.1)", 
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: "4px",
              backgroundColor:
                selectedSection === "crud" ? "#ffd54f" : "transparent",
              transition: "background-color 0.3s",
            },
          }}
        >
          <ListItemIcon sx={{ color: drawerTextColor }}>
            <TableChartIcon />
          </ListItemIcon>
          <ListItemText
            primary={open ? "CRUD Operations" : ""}
            sx={{
              opacity: open ? 1 : 0,
              transition: "opacity 0.3s",
              position: "relative",
            }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
