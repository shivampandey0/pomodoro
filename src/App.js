import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { useTheme } from "./context/ThemeContext";
import { Home } from "./pages";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme ? "dark-theme" : "light-theme"}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
