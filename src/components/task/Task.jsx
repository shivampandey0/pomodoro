import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

export const Task = ({ task }) => {
  return (
    <div key={task} className="flex-row align-cntr gap-1 justify-sb my-8 ">
      <p className="cursor grow-1 txt-md fw-light">{`Todo Task #${task}`}</p>
      <div>
        <FaEdit className="mx-2 txt-md cursor" />
        <FaRegTrashAlt className="mx-2 txt-md cursor" />
      </div>
    </div>
  );
};
