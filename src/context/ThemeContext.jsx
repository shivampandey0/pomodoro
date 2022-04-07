import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  /**
   * Default theme will be dark
   * true = dark
   * false = light
   */

  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("dark")) ?? true
  );

  const toggleTheme = () => setTheme((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("dark", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
