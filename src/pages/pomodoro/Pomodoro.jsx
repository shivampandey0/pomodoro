import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useParams } from "react-router-dom";
import { Button, Header } from "../../components";
import { useData } from "../../context/DataContext";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

export const Pomodoro = () => {
  const { taskID } = useParams();
  const { taskList } = useData();
  const [timer, setTimer] = useState(null);
  const [timerKey, setTimerKey] = useState(0);

  const { title, description, time } = taskList.find(
    (item) => item.id === taskID
  );

  const toggleTimer = () => setTimer((prev) => !prev);

  const children = ({ remainingTime }) => {
    const mins = Math.floor(remainingTime / 60);
    const secs = remainingTime % 60;

    let _time = "" + mins + "m : " + (secs < 10 ? "0" : "");
    _time += "" + secs + "s";

    return (
      <div className="txt-center" role="timer" aria-live="assertive">
        <h1>{_time}</h1>
        <h3>{`out of ${time} min`} </h3>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="container position-center top-10">
        <div className="grid-2 my-4">
          <section className="flex-column gap-1 align-cntr my-8 mx-8">
            <CountdownCircleTimer
              key={timerKey}
              isPlaying={timer}
              duration={time * 60}
              colors={["#950202", "#e8d393"]}
              size={360}
              strokeWidth={24}
            >
              {children}
            </CountdownCircleTimer>
            {timer === null ? (
              <Button onClick={() => setTimer(true)} type={"primary"}>
                <FaPlay /> Start
              </Button>
            ) : (
              <Button onClick={toggleTimer} type={"primary"}>
                {timer ? <FaPause /> : <FaPlay />}
                {timer ? "Pause" : "Resume"}
              </Button>
            )}
            <Button
              type={"secondary"}
              onClick={() => {
                setTimerKey((prev) => prev + 1);
                setTimer(true);
              }}
            >
              <FaRedo /> Restart
            </Button>
          </section>
          <div>
            <h2 className="fw-bold">{title}</h2>
            <p className=" my-4 txt-md fw-light">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
