// 이미지 주손데 사실 다 따온거임
let imageUrls = [
  "https://farm3.staticflickr.com/2811/33823326832_059359647d_k.jpg",
  "https://cdn.discordapp.com/attachments/1053482310894354512/1053589421175345152/5740fe48-d74e-4d95-8ec7-8c1f738cabc0.png",
  "https://cdn.discordapp.com/attachments/1053482310894354512/1053619617794375760/7efb1557-cf57-4ae3-b07a-ec2175679d1c.png",
  "https://momentum.photos/img/f41131a9-11fd-445b-a036-09bd091bc7cd.jpg?momo_cache_bg_uuid=fa9a77c6-e032-4cdc-9fa5-ae40f5195b06",
];

// 뭔지 모르는 함수
function ref() {
  quoteset();
  let randomNum = Math.floor(Math.random() * imageUrls.length);
  let url = imageUrls[randomNum];
  let style = document.createElement("style");
  style.innerHTML = `
.imager {
    background-image: url(${url})
}
`;
  document.head.appendChild(style);
}
