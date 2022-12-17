(function () {
  let greetingElement = document.getElementById("greet");

  function getGreeting() {
    let hour = new Date().getHours();
    if (hour >= 12) return "evening";
    else return "morning";
  }

  let greetInterval = () => {
    greetingElement.innerText = `Good ${getGreeting()}, ${localStorage.getItem(
      "user.name"
    )}.`;
  };

  setInterval(greetInterval, 1000);
  greetInterval();
})();
