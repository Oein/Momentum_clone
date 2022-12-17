let imageUrls = [
    "https://farm3.staticflickr.com/2811/33823326832_059359647d_k.jpg",
    "https://cdn.discordapp.com/attachments/1053482310894354512/1053589421175345152/5740fe48-d74e-4d95-8ec7-8c1f738cabc0.png"
];
let randomNum = Math.round(Math.random() * imageUrls.length);
let url = imageUrls[randomNum];
let style = document.createElement('style');
style.innerHTML = `
.imager {
    background-image: url(${url})
}
`;
document.head.appendChild(style);