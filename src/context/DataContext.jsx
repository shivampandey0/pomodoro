import { createContext, useContext, useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";

const DataContext = createContext();
const useData = () => useContext(DataContext);

const initial = {
  tasks: [],
  shortBreak: 5,
  longBreak: 30,
};

const reducerFunc = (state, { type, payload }) => {
  switch (type) {
    case "SHORT_BREAK":
      return {
        ...state,
        shortBreak: Number(payload),
      };
    case "LONG_BREAK":
      return {
        ...state,
        longBreak: Number(payload),
      };

    case "ADD":
      return {
        ...state,
        tasks: [...state.tasks, { id: uuid(), done: false, ...payload }],
      };

    case "EDIT":
      return {
        ...state,
        tasks: [...state.tasks].map((_task) => {
          if (_task.id === payload.id) {
            return { ...payload };
          }
          return _task;
        }),
      };

    case "DONE":
      return {
        ...state,
        tasks: [...state.tasks].map((_task) => {
          if (_task.id === payload) {
            return { ..._task, done: !_task.done };
          }
          return _task;
        }),
      };

    case "DELETE":
      return {
        ...state,
        tasks: [...state.tasks].filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducerFunc,
    JSON.parse(localStorage.getItem("data")) ?? initial
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { useData, DataProvider };
