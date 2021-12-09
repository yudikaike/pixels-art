const pixelBoard = document.getElementById('pixel-board');

function setColors() {
  const colorList = ['black', 'red', 'blue', 'green'];
  const colors = document.getElementsByClassName('color');
  colors[0].classList.add('selected');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = colorList[index];
  }
}

function setPixelBoard(size) {
  for (let row = 0; row < size; row += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.classList.add('pixelRow');
    for (let column = 0; column < size; column += 1) {
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
  pixelBoard.addEventListener('click', (event) => {
    const pixel = event.target;
    const color = document.getElementsByClassName('selected')[0];
    if (pixel.className !== 'pixel') {
      return;
    }
    pixel.style.backgroundColor = color.style.backgroundColor;
  });
}

function clearPixels() {
  const clearBoard = document.getElementById('clear-board');
  clearBoard.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}

function removePixelBoard() {
  pixelBoard.innerHTML = '';
}

function setNewPixelBoard() {
  const size = document.getElementById('board-size').value;
  if (size !== '' && size >= 5 && size <= 50) {
    setPixelBoard(size);
  } else if (size > 50) {
    setPixelBoard(50);
    alert('Board inválido!');
  } else {
    setPixelBoard(5);
    alert('Board inválido!');
  }
}

function generateNewBoard() {
  const generateBoard = document.getElementById('generate-board');
  generateBoard.addEventListener('click', () => {
    removePixelBoard();
    setNewPixelBoard();
    paintPixel();
  });
}

function eventHandler() {
  selectColor();
  paintPixel();
  clearPixels();
  generateNewBoard();
}

window.onload = () => {
  setColors();
  setPixelBoard(5);
  eventHandler();
};
