function setColors() {
  const colorList = ['red', 'blue', 'green', 'yellow'];
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = colorList[index];
  }
}

window.onload = setColors;
