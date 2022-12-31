(function () {
  let greetingElement = document.getElementById("greet");

  function getGreeting() {
    let hour = new Date().getHours();
    if (hour >= 5 && hour <= 11) return "morning";
    else if (hour == 12) return "midday";
    else if (hour >= 13 && hour <= 17) return "afternoon";
    else if (hour >= 18 && 22) return "evening";
    else if (hour == 0 || hour == 24) return "midnight";
    else return "night";
  }

  let greetInterval = () => {
    greetingElement.innerText = `Good ${getGreeting()}, ${localStorage.getItem(
      "user.name"
    )}.`;
  };

  setInterval(greetInterval, 1000);
  greetInterval();
})();
