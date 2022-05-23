import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { Welcome, Header, Modal, Task } from '../../components';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import useTitle from '../../hooks/useTitle';
import {
  addTaskToFirestore,
  deleteTask,
  updateTaskToFirestore,
} from '../../utils/db-services';
import { db } from '../../utils/firebase-config';

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState({});
  const { state, dispatch } = useData();
  const {
    authState: { isLoggedIn, user },
  } = useAuth();

  useTitle('Marvel Pomodoro');

  const toggleModal = () => setShowModal((prev) => !prev);

  const addTask = () => {
    addTaskToFirestore(user?.uid, { ...task, done: false });
    toggleModal();
    setTask({});
  };

  const updateTask = () => {
    updateTaskToFirestore(user?.uid, task.id, task);
    toggleModal();
    setTask({});
  };

  const editTask = (task) => {
    setTask(() => task);
    toggleModal();
  };

  useEffect(() => {
    let unsub = null;
    const uid = user?.uid;
    if (uid) {
      const q = collection(db, 'pomodoro', uid, 'tasks');
      unsub = onSnapshot(q, (qs) => {
        const _lists = qs?.docs?.map((doc) => ({
          id: doc?.id,
          ...doc?.data(),
        }));
        dispatch({ type: 'ADD_TASKS', payload: _lists });
      });
    }

    return () => {
      unsub && unsub();
    };
  }, [user]);

  return (
    <>
      <Header>
        <Welcome />
      </Header>
      <div className='container w-80 mx-auto'>
        {showModal && (
          <Modal
            show={showModal}
            handleClose={toggleModal}
            handleSubmit={task.id ? updateTask : addTask}
            changeHandler={setTask}
            task={task}
          />
        )}
        <div className='flex-row justify-sb align-cntr'>
          <h2>Tasks List</h2>
          {isLoggedIn && (
            <FaPlusSquare
              onClick={() => {
                setTask({});
                toggleModal();
              }}
              className='txt-lg cursor'
            />
          )}
        </div>
        <div className='tasklist'>
          {!isLoggedIn && (
            <div className='txt-center txt-md'>Please Login to add tasks</div>
          )}
          {isLoggedIn && !state?.tasks.length && (
            <div className='txt-center txt-md'>Add tasks</div>
          )}
          {state.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              editHandler={() => editTask(task)}
              deleteHandler={() => deleteTask(user?.uid, task.id)}
              checkHandler={(e) =>
                updateTaskToFirestore(user?.uid, task.id, {
                  ...task,
                  done: e,
                })
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};
