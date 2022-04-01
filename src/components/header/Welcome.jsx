import { useData } from "../../context/DataContext";

export const Welcome = () => {
  const { taskList } = useData();
  return (
    <div>
      <h1 className="fw-bold my-8">Welcome back, Shivam !</h1>
      <h3 className="fw-normal">{`You have ${taskList.length} tasks for today. All the best !!`}</h3>
    </div>
  );
};
