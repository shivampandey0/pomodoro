import { FaMoon, FaGithub, FaSun, FaRegSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { openGithub } from "../../utils/utils";

export const Actions = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className="txt-end txt-md">
      <FaGithub onClick={openGithub} className="mx-4 cursor" />
      <Link to={"/settings"}>
        <FaRegSun className="mx-4 cursor" />
      </Link>
      {theme ? (
        <FaSun onClick={toggleTheme} className="mx-4 cursor" />
      ) : (
        <FaMoon onClick={toggleTheme} className="mx-4  cursor" />
      )}
    </nav>
  );
};
