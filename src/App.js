import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useTheme } from "./context/ThemeContext";
import { Error, Home, Pomodoro, Settings } from "./pages";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme ? "dark-theme" : "light-theme"}`}>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/pomodoro/:taskID" element={<Pomodoro />} />
      </Routes>
    </div>
  );
}

export default App;
