let url = {
  google: "https://www.google.com/search?q=",
  duck: "https://duckduckgo.com/?q=",
};

document.getElementById("search").addEventListener("keypress", (e) => {
  let engine = localStorage.getItem("Settings.general.searchEngine");

  if (e.keyCode === 13) {
    location.href = `${url[engine]}${e.target.value}`;
  }
});

document.getElementById("searchIcon").addEventListener("click", (e) => {
  let engine = localStorage.getItem("Settings.general.searchEngine");
  let v = document.getElementById("search").value;
  if (v && v.length > 0) location.href = `${url[engine]}${v}`;
});
