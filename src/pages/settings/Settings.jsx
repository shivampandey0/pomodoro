import { Header, Slider } from "../../components";
import { useData } from "../../context/DataContext";

export const Settings = () => {
  const {
    state: { shortBreak, longBreak },
    dispatch,
  } = useData();

  return (
    <>
      <Header />
      <div className="container w-80 mx-auto">
        <h2>Settings</h2>
        <div className="flex-column mx-8 my-8">
          <Slider
            min={5}
            max={30}
            value={shortBreak}
            onChange={(e) =>
              dispatch({ type: "SHORT_BREAK", payload: e.target.value })
            }
            title={"Short Break"}
          />
          <Slider
            min={10}
            max={60}
            value={longBreak}
            onChange={(e) =>
              dispatch({ type: "LONG_BREAK", payload: e.target.value })
            }
            title={"Long Break"}
          />
        </div>
      </div>
    </>
  );
};
