const getCurrentTime = () => {
  const option = {
    timeZone: 'Asia/Seoul',
    hour12: true,
    weekday: "long", // Monday, Tuesday, Wednesday, etc.
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  // get the current time 
  const currentTime = new Date().toLocaleString("he-IL", option);

  // Render
  document.querySelector(".clock").innerHTML = currentTime;

  setTimeout(getCurrentTime, 69)

}

const checkLeadingZero = (paramTime) => {
  paramTime <10 
    ? paramTime = `0${paramTime}`
    : null 
  
    return paramTime;
}