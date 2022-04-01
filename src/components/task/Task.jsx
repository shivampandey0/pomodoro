import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

export const Task = ({ task, editHandler, deleteHandler }) => {
  return (
    <div className="flex-row align-cntr gap-1 justify-sb my-8 ">
      <p className="cursor grow-1 txt-md fw-normal">{`${task.title}`}</p>
      <div>
        <FaEdit onClick={editHandler} className="mx-2 txt-md cursor" />
        <FaRegTrashAlt onClick={deleteHandler} className="mx-2 txt-md cursor" />
      </div>
    </div>
  );
};
