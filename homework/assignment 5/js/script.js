// Array of colors
const colors = ["red", "blue", "green", "yellow", "purple"];

// Index to keep track of the current color
let colorIndex = 0;

// Function to change the color
function changeColor() {
  const colorDiv = document.getElementById("colorDiv");

  // Change the text color to the next color in the array
  colorDiv.style.color = colors[colorIndex];

  // Increment the index or reset to 0 if it reaches the end of the array
  colorIndex = (colorIndex + 1) % colors.length;
}