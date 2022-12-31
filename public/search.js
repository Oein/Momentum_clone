let url = {
  google: "https://www.google.com/search?q=",
  duck: "https://duckduckgo.com/?q=",
  naver: "https://search.naver.com/search.naver?query=",
  nate: "https://search.daum.net/nate?q=",
  daum: "https://search.daum.net/search?q=",
  youtube: "https://www.youtube.com/results?search_query=",
  twitter: "https://twitter.com/search?q=",
  stackoverflow: "https://stackoverflow.com/search?q=",
  bing: "https://www.bing.com/search?q=",
  github: "https://github.com/search?q=",
};

document.getElementById("search").addEventListener("keypress", (e) => {
  let engine = localStorage.getItem("Settings.general.searchEngine");

  if (e.keyCode === 13) {
    location.href = encodeURI(`${url[engine]}${e.target.value}`);
  }
});

document.getElementById("searchIcon").addEventListener("click", (e) => {
  let engine = localStorage.getItem("Settings.general.searchEngine");
  let v = document.getElementById("search").value;
  if (v && v.length > 0) encodeURI((location.href = `${url[engine]}${v}`));
});
