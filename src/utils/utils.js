export const formatTime = (remainingTime) => {
  const mins = Math.floor(remainingTime / 60);
  const secs = remainingTime % 60;

  let _time = "" + mins + "m : " + (secs < 10 ? "0" : "");
  _time += "" + secs + "s";

  return _time;
};


export const openGithub = () =>
  window.open(`https://github.com/shivampandey0/pomodoro`, "_blank");
