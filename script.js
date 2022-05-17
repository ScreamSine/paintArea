const colors = document.querySelector(".chosen-color");
const checkbox = document.querySelector("#eraser-mode");
const canvas = document.querySelector(".canvas");

for (let i = 0; i < 256; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");
  canvas.appendChild(pixel);
  pixel.addEventListener("click", function () {
    pixel.style.background = colors.value;
  });
}

checkbox.onchange = function () {
  if (checkbox.checked) {
    colors.value = "white";
  } else {
    colors.value = "black";
  }
};
