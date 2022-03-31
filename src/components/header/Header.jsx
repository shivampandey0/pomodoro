import { Actions } from "./Actions";
import { Welcome } from "./Welcome";

export const Header = () => {
  return (
    <header className="position-center">
      <Actions />
      <Welcome />
    </header>
  );
};
