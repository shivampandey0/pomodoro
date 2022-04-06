import { useData } from "../../context/DataContext";

export const Welcome = () => {
  const {
    state: { tasks },
  } = useData();
  return (
    <div>
      <h1 className="fw-bold my-4">Welcome back, Shivam !</h1>
      <h3 className="fw-normal my-4">{`You have ${tasks.length} tasks for today. All the best !!`}</h3>
    </div>
  );
};
