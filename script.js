const setClock = () => {
  const today = new Date();

  const { hours, minutes, seconds, period } = formatTime(today);

  document.querySelector(".hours").textContent = hours;
  document.querySelector(".minutes").textContent = minutes;
  document.querySelector(".seconds").textContent = seconds;
  document.querySelector(".period").textContent = period;

  document.querySelector(".date").textContent = formatDate(today);
};

const formatTime = (todayDate) => {
  let hours = todayDate.getHours();
  let minutes = todayDate.getMinutes();
  let seconds = todayDate.getSeconds();

  let period = hours >= 12 ? "PM" : "AM";

  hours = hours > 12 ? hours % 12 : hours;

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return { hours, minutes, seconds, period };
};

const formatDate = (todayDate) => {
  const date = todayDate.getDate();
  const year = todayDate.getFullYear();
  const day = todayDate.toLocaleString("default", { weekday: "long" });
  const month = todayDate.toLocaleString("default", { month: "short" });

  return `${day} ${month} ${date}, ${year}`;
};

setClock();
setInterval(setClock, 1000);
