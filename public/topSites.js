function favi(url) {
  return `chrome-extension://${
    chrome.runtime.id
  }/_favicon/?pageUrl=${encodeURIComponent(url)}&size=32`;
}

/**
 *
 * @param {{title: string; url: string;}} x
 */
function makeEle(x) {
  let tile = document.createElement("a");
  tile.className = "tile";
  tile.href = x.url;
  let tiler = document.createElement("div");
  tiler.className = "tiler";
  let tileIcon = document.createElement("div");
  tileIcon.className = "tile-icon";
  let img = document.createElement("img");
  img.draggable = "false";
  img.alt = "";
  img.src = favi(x.url);
  tileIcon.append(img);
  let tilerLtr = document.createElement("div");
  tilerLtr.className = "tile-title title-ltr";
  let span = document.createElement("span");
  span.innerText = x.title;
  tilerLtr.append(span);
  tiler.append(tileIcon);
  tiler.append(tilerLtr);
  tile.append(tiler);
  return tile;
}

/**
 *
 * @param {{title: string; url: string;}[]} topSites
 */
function topSiteHandler(topSites) {
  for (let i = 0; i < Math.min(4, topSites.length); i++) {
    let topSite = topSites[i];
    document.getElementById("ts").append(makeEle(topSite));
  }
}

chrome.topSites.get(topSiteHandler);
