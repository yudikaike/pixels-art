function setColors() {
  const colorList = ['black', 'red', 'blue', 'green'];
  const colors = document.getElementsByClassName('color');
  colors[0].classList.add('selected');
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

function selectColor() {
  const colorPalette = document.getElementById('color-palette');
  colorPalette.addEventListener('click', (event) => {
    const colors = document.getElementsByClassName('color');
    const color = event.target;
    if (color.className !== 'color') {
      return;
    }
    for (let index = 0; index < colors.length; index += 1) {
      if (colors[index] !== color) {
        colors[index].classList.remove('selected');
      } else {
        color.classList.add('selected');
      }
    }
  });
}

function paintPixel() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', (event) => {
    const pixel = event.target;
    const color = document.getElementsByClassName('selected')[0];
    if (pixel.className !== 'pixel') {
      return;
    }
    pixel.style.backgroundColor = color.style.backgroundColor;
  });
}

function eventHandler() {
  selectColor();
  paintPixel();
}

window.onload = () => {
  setColors();
  setPixelBoard();
  eventHandler();
};
