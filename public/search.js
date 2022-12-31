document.getElementById("search").addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    location.href = `https://www.google.com/search?q=${e.target.value}`;
  }
});

document.getElementById("searchIcon").addEventListener("click", (e) => {
  let v = document.getElementById("search").value;
  if (v && v.length > 0) location.href = `https://www.google.com/search?q=${v}`;
});
