function cst() {
    if (localStorage.getItem("user.cs") == 'yes') {
        let style = document.createElement("style");
        style.innerHTML = `.imager {
            background-image: url(${localStorage.getItem("user.csurl")})
        }`;
        document.head.appendChild(style);
    }
    else ref();
}
