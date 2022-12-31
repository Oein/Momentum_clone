document.getElementById("search").addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    location.href = `https://duckduckgo.com/?q=${e.target.value}`;
  }
});

document.getElementById("searchIcon").addEventListener("click", (e) => {
  let v = document.getElementById("search").value;
  if (v && v.length > 0) location.href = `https://duckduckgo.com/?q=${v}`;
});
