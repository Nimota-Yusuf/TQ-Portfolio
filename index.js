function digitalClock() {
  // Get the current time
  const now = new Date();

  // Get the day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[now.getDay()];

  // Get the current date
  const day = now.getDate();
  const month = now.getMonth() + 1; // Months are zero indexed, so we add 1
  const year = now.getFullYear();
  const date = `${day}/${month}/${year}`;

  // Get the current time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // converting to 12 hour format
  const amOrPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  hours = hours < 10 ? "0" + hours : hours; // Add leading zero if necessary
  minutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero if necessary
  seconds = seconds < 10 ? "0" + seconds : seconds; // Add leading zero if necessary

  const time = `${hours}:${minutes}:${seconds}`;

  // Display the digital clock
  const displayClock = document.getElementById("digital-date");
  displayClock.innerHTML = `${dayOfWeek}, ${date}.  ${time} ${amOrPm}`;
}

// Update the clock every second
setInterval(digitalClock, 1000);
