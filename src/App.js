import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Error404 from "./pages/Error404";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import { ThemeProvider as CustomThemeProvider, useTheme } from "./ThemeContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <CustomThemeProvider>
      <ThemeWrapper
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onLogin={handleLogin}
      />
    </CustomThemeProvider>
  );
};

const ThemeWrapper = ({ isLoggedIn, onLogin }) => {
  const { darkMode } = useTheme();

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar isLoggedIn={isLoggedIn} onLoginClick={onLogin} />
        <div style={{ display: "flex", marginTop: 64 }}>
          <Sidebar />
          <main style={{ flexGrow: 1, padding: 16 }}>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
