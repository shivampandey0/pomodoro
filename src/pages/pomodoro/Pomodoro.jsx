import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useParams } from "react-router-dom";
import { Button, Header } from "../../components";
import { useData } from "../../context/DataContext";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import { formatTime } from "../../utils/utils";
import useMediaQuery from "../../hooks/useMediaQuery";

export const Pomodoro = () => {
  const { taskID } = useParams();
  const {
    state: { tasks, shortBreak, longBreak },
  } = useData();
  const [timer, setTimer] = useState(null);
  const [timerKey, setTimerKey] = useState(0);
  const { setTitle } = useTitle("Marvel Pomodoro");

  /**
   * Media Queries
   */

  const isDesktop = useMediaQuery("(min-width:960px)");
  const isTablet = useMediaQuery("(max-width:600px)");

  const timerSize = isDesktop ? 360 : isTablet ? 200 : 270;
  const strokeSize = isDesktop ? 24 : isTablet ? 12 : 18;

  // console.log(timerSize);
  // console.log(isDesktop);
  // console.log(isTablet);

  const {
    title,
    description,
    time: focusTime,
  } = tasks.find((item) => item.id === taskID);

  const [timerState, setTimerState] = useState({
    time: focusTime,
    mode: "Focus",
  });

  const toggleTimer = () => setTimer((prev) => !prev);

  const resetTimer = (_time, mode = "Break") => {
    setTimerState(() => ({ time: _time, mode: mode }));
    setTimerKey((prev) => prev + 1);
    setTimer(null);
  };

  return (
    <>
      <Header />
      <div className="container w-80 mx-auto">
        <div className="grid-2 gap-2 my-4">
          <section className="flex-column gap-1 align-cntr mx-auto">
            <CountdownCircleTimer
              key={timerKey}
              isPlaying={timer}
              duration={timerState.time * 60}
              colors={["#950202", "#e8d393"]}
              size={timerSize}
              strokeWidth={strokeSize}
              onComplete={() => resetTimer(shortBreak)}
              onUpdate={(remainingTime) =>
                setTitle(`${formatTime(remainingTime)} | ${timerState.mode}`)
              }
            >
              {({ remainingTime }) => (
                <div className="txt-center" role="timer" aria-live="assertive">
                  <p className="h2 my-2 txt-primary fw-bold">
                    {timerState.mode}{" "}
                  </p>
                  <p className="h1 my-2">{formatTime(remainingTime)}</p>
                  <p className="h3 my-2">{`out of ${timerState.time} min`}</p>
                </div>
              )}
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
              onClick={() => resetTimer(focusTime, "Focus")}
            >
              <FaRedo /> Restart
            </Button>

            <div className="flex-row justify-ev gap-1 w-100">
              <Button type={"primary"} onClick={() => resetTimer(shortBreak)}>
                Short Break
              </Button>
              <Button onClick={() => resetTimer(longBreak)}>Long Break</Button>
            </div>
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
