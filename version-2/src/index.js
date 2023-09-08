function getRandomColor() {
  /* 랜덤 배경색을 구하는 함수 */
  const randomColor = Math.floor(Math.random() * (256 * 256 * 256)).toString(
    16
  );
  return "#" + randomColor.padStart(6, "0");
}

function getTextColor(color) {
  /* 랜덤 배경색의 보색을 구하는 함수 */
  const randomTextColor = (
    parseInt(color.slice(1), 16) ^ parseInt("FFFFFF", 16)
  ).toString(16);
  return "#" + randomTextColor.padStart(6, "0");
}

function changeColor() {
  const bgColor = getRandomColor();
  const textColor = getTextColor(bgColor);

  document.body.style.backgroundColor = bgColor;
  document.getElementById("title").style.color = textColor;
}

let btnColorChange = document.getElementById("changeColor");
btnColorChange.addEventListener("click", changeColor);
