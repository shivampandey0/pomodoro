import { FaPlusSquare } from "react-icons/fa";
import { Task } from "../../components";

export const Home = () => {
  return (
    <div className="container position-center">
      <div className="flex-row justify-sb align-cntr">
        <h2>Todo dodo dodo dodoooo List</h2>
        <FaPlusSquare className="txt-lg cursor" />
      </div>
      <div className="mx-8 my-8">
        {[1, 2, 3, 4].map((item) => (
          <Task key={item} task={item} />
        ))}
      </div>
    </div>
  );
};
