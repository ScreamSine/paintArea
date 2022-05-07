let colors = document.querySelector(".chosen-color");
let pixel = document.querySelectorAll(".pixel");
let checkbox = document.querySelector("#eraser-mode");

checkbox.onchange = function () {
  if (checkbox.checked) {
    colors.value = "white";
  } else {
    colors.value = "black";
  }
};

for (let i = 0; i < pixel.length; i++) {
  pixel[i].onclick = function () {
    pixel[i].style.backgroundColor = colors.value;
  };
}
