var colors = ["green", "yellow", "red"];
var currentColorIndex = 0;
var circles = document.querySelectorAll('.circle');

function changeColor() {
  for (var i = 0; i < circles.length; i++) {
    circles[i].style.background = 'black';
  }
  currentColorIndex++;
  if (currentColorIndex >= colors.length) {
    currentColorIndex = 0;
  }
  circles[currentColorIndex].style.background = colors[currentColorIndex];
}

for (var i = 0; i < circles.length; i++) {
  circles[i].addEventListener('click', changeColor);
}