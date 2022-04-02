import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { Welcome, Header, Modal, Task } from "../../components";
import { v4 as uuid } from "uuid";
import { useData } from "../../context/DataContext";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState({});
  const { taskList, setTaskList } = useData();

  const toggleModal = () => setShowModal((prev) => !prev);

  const addTask = () => {
    setTaskList((prev) => [...prev, { ...task, id: uuid(), done: false }]);
    toggleModal();
    setTask({});
  };

  const updateTask = () => {
    setTaskList((prev) =>
      prev.map((_task) => {
        if (_task.id === task.id) {
          return { ...task };
        }
        return _task;
      })
    );
    toggleModal();
    setTask({});
  };

  const editTask = (task) => {
    setTask(() => task);
    toggleModal();
  };

  const deleteTask = (id) =>
    setTaskList((prev) => prev.filter((task) => task.id !== id));

  return (
    <>
      <Header>
        <Welcome />
      </Header>
      <div className="container position-center top-30">
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
        <div className="mx-8 my-8">
          {taskList.map((task) => (
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
