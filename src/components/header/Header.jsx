import { Link } from "react-router-dom";
import { Actions } from "./Actions";
// import { Welcome } from "./Welcome";

export const Header = ({ children }) => {
  return (
    <header className="w-80 mx-auto">
      <div className="flex-row align-cntr justify-sb py-4">
        <Link className="h1" to={"/"}>Marvel Pomodoro</Link>
        <Actions />
      </div>
      {children}
    </header>
  );
};
