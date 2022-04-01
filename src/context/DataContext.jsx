import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);
  return (
    <DataContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </DataContext.Provider>
  );
};

export { useData, DataProvider };
