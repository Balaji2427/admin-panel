// HomePage.js
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import CRUD from "../components/CRUD";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [open, setOpen] = useState(false); 

  const handleDrawerToggle = () => {
    setOpen((prevOpen) => !prevOpen); 
  };

  return (
    <>
      <Sidebar
        setActiveSection={setActiveSection}
        open={open}
        handleDrawerToggle={handleDrawerToggle} 
      />
        {activeSection === "dashboard" && <Dashboard />}
        {activeSection === "crud" && <CRUD />}
    </>
  );
};

export default HomePage;
