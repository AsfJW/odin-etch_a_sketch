
// Create the canvas
function createCanvas() {

    // Make a grid container with fixed size
    const container = document.getElementById('container');
    container.style.width = '512px';
    container.style.height = '512px';
}

function createGrid(size) {

    // Use custom values for the number of squares
    const container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Create squares within the container and add the event listener
    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height = `512/${size}`;
        square.style.width = `512/${size}`;
        container.appendChild(square);
        const paintSquare = document.getElementsByClassName("square");
        paintSquare[i].addEventListener('mouseenter', function () {paintSquare[i].style.backgroundColor = colour});
    }
}

// Clear the grid
function clearGrid() {
    const revert = document.getElementsByClassName("square");
    for (let i = 0; i < revert.length; i++) {
        revert[i].style.backgroundColor = 'bisque';
    }   
}

// Clear grid button
document.getElementById('btn').addEventListener('click', () => {
    clearGrid();
    let size = prompt('New grid size?');
    while (size > 100) {
        alert('No bigger than 100 please.');
        size = prompt('New grid size?');
    }
    createGrid(size);
});

// Toggle colour
let colour = 'black';
document.getElementById('blackBtn').addEventListener('click', () => {
    colour = 'black';
})
document.getElementById('randomBtn').addEventListener('click', () => {
    let randomColour = Math.floor(Math.random()*16777215).toString(16);
    colour = '#' + randomColour;
})

createCanvas();
createGrid(16);