document.getElementById("search").addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    location.href = `https://www.google.com/search?q=${e.target.value}`;
  }
});
