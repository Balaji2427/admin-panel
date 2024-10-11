  import React from "react";

  import { IconButton } from "@mui/material";

  import { useTheme } from "../ThemeContext";

  import Brightness4Icon from "@mui/icons-material/Brightness4";

  import Brightness7Icon from "@mui/icons-material/Brightness7";

  const ToggleThemeButton = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        style={{ position: "absolute", right: "16px", top: "16px" }}
      >
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    );
  };

  export default ToggleThemeButton;
