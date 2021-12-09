function setColors() {
  const colorList = ['black', 'red', 'blue', 'green'];
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = colorList[index];
  }
}

function setPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let row = 0; row < 5; row += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.classList.add('pixelRow');
    for (let column = 0; column < 5; column += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelRow.appendChild(pixel);
    }
    pixelBoard.appendChild(pixelRow);
  }
}

window.onload = () => {
  setColors();
  setPixelBoard();
};
