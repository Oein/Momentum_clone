let imageUrls = ["./bg/b1.jpg", "./bg/b2.png", "./bg/b3.png", "./bg/b4.jpg"];

(function () {
  let randomNum = Math.floor(Math.random() * imageUrls.length);
  let url = imageUrls[randomNum];
  let style = document.createElement("style");
  var bgImg = new Image();
  bgImg.onload = function () {
    style.innerHTML = `
  .imager {
      background-image: url(${url})
  }
  `;
    document.getElementById("black").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("black").remove();
    }, 110);
  };
  bgImg.src = url;

  if (localStorage.getItem("settings.theme.background") != null) {
    style.innerHTML = `.imager {
      background-image: url(${localStorage.getItem(
        "settings.theme.background"
      )})
    }`;
  }
  document.head.appendChild(style);
})();
