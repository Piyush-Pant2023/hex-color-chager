
function generateColor() {
    const colorDisplay = document.getElementById('colorDisplay');
    const randomColor = getRandomHexColor();
    colorDisplay.textContent = randomColor;
    colorDisplay.style.backgroundColor = randomColor;
  }
  
  function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  generateColor(); // Initial color generation on page load
  