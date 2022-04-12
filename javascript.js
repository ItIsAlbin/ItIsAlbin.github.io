function init() {
  randomColorBetweenBlocks();
  startGarbageTimer();
  startBuildingsTimer();
}

function displayProjectText(id, textToDisplay) {
  document.getElementById(id).innerHTML = textToDisplay;
}

function randomColorBetweenBlocks() {
  let elementsVert = document.querySelector(".between-blocks");
  for (let i = 0; i < elementsVert.length; i++) {
    elementsVert[i].style.backgroundColor = HSVtoRGB(0, 0, clamp(Math.random(), 0.2, 0.6));
  }
}

function startGarbageTimer() {
  setInterval(changeGarbagePic, 2400);
}

let garbageIndex = 1;
function changeGarbagePic() {
  garbageIndex++;
  let imgGarbage = document.querySelector(".image-garbage");
  if (garbageIndex >= 9) {
    garbageIndex = 1;
  }
  imgGarbage[0].src = "Media/GarbageCollector/SciFiCol0" + garbageIndex.toString() + ".jpg";
}

function startBuildingsTimer() {
  setInterval(changeBuildingsPic, 3000);
}

let buildingsIndex = 1;
function changeBuildingsPic() {
  buildingsIndex++;
  let imgBuildings = document.querySelector(".image-buildings");
  if (buildingsIndex >= 8) {
    buildingsIndex = 1;
  }
  imgBuildings[0].src = "Media/Buildings/Building0" + buildingsIndex.toString() + ".jpg";
}

function HSVtoRGB(h, s, v) {
  let r, g, b;

  let i = Math.floor(h * 6);
  let f = h * 6 - i;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      (r = v), (g = t), (b = p);
      break;
    case 1:
      (r = q), (g = v), (b = p);
      break;
    case 2:
      (r = p), (g = v), (b = t);
      break;
    case 3:
      (r = p), (g = q), (b = v);
      break;
    case 4:
      (r = t), (g = p), (b = v);
      break;
    case 5:
      (r = v), (g = p), (b = q);
      break;
  }
  return "rgb(" + (r * 255).toString() + "," + (g * 255).toString() + "," + (b * 255).toString() + ")";
}

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}
