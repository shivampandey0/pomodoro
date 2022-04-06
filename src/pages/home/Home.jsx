import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { Welcome, Header, Modal, Task } from "../../components";
import { useData } from "../../context/DataContext";
import useTitle from "../../hooks/useTitle";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState({});
  const { state, dispatch } = useData();
  useTitle("Marvel Pomodoro");

  const toggleModal = () => setShowModal((prev) => !prev);

  const addTask = () => {
    dispatch({ type: "ADD", payload: task });
    toggleModal();
    setTask({});
  };

  const updateTask = () => {
    dispatch({ type: "EDIT", payload: task });
    toggleModal();
    setTask({});
  };

  const editTask = (task) => {
    setTask(() => task);
    toggleModal();
  };

  const deleteTask = (id) => dispatch({ type: "DELETE", payload: id });

  return (
    <>
      <Header>
        <Welcome />
      </Header>
      <div className="container w-80 mx-auto">
        {showModal && (
          <Modal
            show={showModal}
            handleClose={toggleModal}
            handleSubmit={task.id ? updateTask : addTask}
            changeHandler={setTask}
            task={task}
          />
        )}
        <div className="flex-row justify-sb align-cntr">
          <h2>Todo dodo dodo dodoooo List</h2>
          <FaPlusSquare
            onClick={() => {
              setTask({});
              toggleModal();
            }}
            className="txt-lg cursor"
          />
        </div>
        <div className="tasklist">
          {state.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              editHandler={() => editTask(task)}
              deleteHandler={() => deleteTask(task.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
