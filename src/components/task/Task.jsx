import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Task = ({ task, editHandler, deleteHandler }) => {
  return (
    <div className="task flex-row align-cntr gap-1 justify-sb my-4 mx-2 px-2 py-2">
      <Link
        to={`/pomodoro/${task.id}`}
        className="cursor grow-1 txt-md fw-normal"
      >{`${task.title}`}</Link>
      <div>
        <FaEdit onClick={editHandler} className="mx-2 txt-md cursor" />
        <FaRegTrashAlt onClick={deleteHandler} className="mx-2 txt-md cursor" />
      </div>
    </div>
  );
};
