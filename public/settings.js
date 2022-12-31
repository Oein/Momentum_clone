let settingsElement = {
  clock: document.querySelector(
    "#setting\\.general > div:nth-child(1) > label > input"
  ),
  greet: document.querySelector(
    "#setting\\.general > div:nth-child(2) > label > input"
  ),
  quote: document.querySelector(
    "#setting\\.general > div:nth-child(3) > label > input"
  ),
  topSites: document.querySelector(
    "#setting\\.general > div:nth-child(4) > label > input"
  ),
  search: document.querySelector(
    "#setting\\.general > div:nth-child(5) > label > input"
  ),
};
let settingsID = {
  clock: "Settings.show.click",
  greet: "Settings.show.greet",
  quote: "Settings.show.quote",
  topSites: "Settings.show.topSites",
  search: "Settings.show.search",
};
let elementID = {
  clock: "time",
  greet: "greet",
  quote: "quotemsg",
  topSites: "ts",
  search: "scont",
};
let opened = false;

Object.keys(settingsID).forEach((i) => {
  if (localStorage.getItem(settingsID[i]) == null) {
    localStorage.setItem(settingsID[i], "1");
  }

  let enabled = localStorage.getItem(settingsID[i]);
  if (enabled == "1") {
    settingsElement[i].checked = true;
  } else {
    document.getElementById(elementID[i]).style.display = "none";
  }
  settingsElement[i].addEventListener("change", (e) => {
    let gx = e.target.checked;
    if (gx) {
      localStorage.setItem(settingsID[i], "1");
      document.getElementById(elementID[i]).style.display = "block";
    } else {
      localStorage.setItem(settingsID[i], "0");
      document.getElementById(elementID[i]).style.display = "none";
    }
  });
});
function settingsSH() {
  if (opened) {
    document.getElementById("settingsPannel").style.opacity = "1";
    document.getElementById("settingsPannel").style.transform =
      "translateX(0vw)";
  } else {
    document.getElementById("settingsPannel").style.opacity = "0";
    document.getElementById("settingsPannel").style.transform =
      "translateX(-100vw)";
  }
}
document.getElementById("closebtn").addEventListener("click", () => {
  opened = false;
  settingsSH();
});
document.getElementById("setting").addEventListener("click", () => {
  opened = !opened;
  settingsSH();
});
let engineName = {
  google: "Google",
  duck: "DuckDuckGo",
};
document
  .getElementById("searchEngineSelector")
  .addEventListener("change", (e) => {
    localStorage.setItem("Settings.general.searchEngine", e.target.value);
    document.querySelector("#search").placeholder = `Search on ${
      engineName[localStorage.getItem("Settings.general.searchEngine")]
    }`;
  });
if (!localStorage.getItem("Settings.general.searchEngine"))
  localStorage.setItem("Settings.general.searchEngine", "google");
document.querySelector("#search").placeholder = `Search on ${
  engineName[localStorage.getItem("Settings.general.searchEngine")]
}`;
document.getElementById("searchEngineSelector").value = localStorage.getItem(
  "Settings.general.searchEngine"
);
