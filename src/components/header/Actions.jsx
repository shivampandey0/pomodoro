import React from "react";
import { FaMoon, FaGithub, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export const Actions = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="txt-end txt-md">
      <FaGithub className="mx-4  cursor" />
      {theme ? (
        <FaSun onClick={toggleTheme} className="mx-4 cursor" />
      ) : (
        <FaMoon onClick={toggleTheme} className="mx-4  cursor" />
      )}
    </nav>
  );
};
