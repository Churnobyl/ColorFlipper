function changeColor() {
  let nxtR, nxtG, nxtB;
  nxtR = Math.floor(Math.random() * 256);
  nxtG = Math.floor(Math.random() * 256);
  nxtB = Math.floor(Math.random() * 256);

  /* Change Background Color */
  let bgR, bgG, bgB;

  bgR = nxtR.toString(16).padStart(2, "0");
  bgG = nxtG.toString(16).padStart(2, "0");
  bgB = nxtB.toString(16).padStart(2, "0");

  const changedColor = "#" + bgR + bgG + bgB;
  document.body.style.backgroundColor = changedColor;

  /* Change Title Color To Complementary Color of Bg Color */
  let titleR, titleG, titleB;

  titleR = (255 - nxtR).toString(16).padStart(2, "0");
  titleG = (255 - nxtG).toString(16).padStart(2, "0");
  titleB = (255 - nxtB).toString(16).padStart(2, "0");
  const titleColor = "#" + titleR + titleG + titleB;
  console.log();
  document.getElementById("title").style.color = titleColor;
}

let btnColorChange = document.getElementById("changeColor");
btnColorChange.addEventListener("click", changeColor);
