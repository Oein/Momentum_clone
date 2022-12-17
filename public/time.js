(function () {
  let timeElement = document.getElementById("time");

  function pad2(number) {
    return (number < 10 ? "0" : "") + number;
  }

  let timeInterval = () => {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();

    time.innerText = `${pad2(hour)}:${pad2(minutes)}`;
  };

  setInterval(timeInterval, 1000);
  timeInterval();
})();
