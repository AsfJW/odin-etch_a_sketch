
// Create the grid with custom values
function createGrid(customHeight, customWidth) {

    // Make a grid container with fixed dimensions
    const container = document.getElementById('container');
    container.style.width = '512px';
    container.style.height = '512px';

    // Use custom values for the number of squares
    container.style.gridTemplateColumns = `repeat(${customWidth}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${customHeight}, 1fr)`;

    // Create squares within the container
    for (let i = 0; i < (customWidth * customHeight); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height = `512/${customHeight}`;
        square.style.width = `512/${customWidth}`;
        container.appendChild(square);
    }
}

// Grab the 'square' elements and add the event listener for custom colour
function paint(colour) {
        const paintSquare = document.getElementsByClassName("square");
        for (let i = 0; i < paintSquare.length; i++) {
            paintSquare[i].addEventListener('mouseenter', function() {paintSquare[i].style.backgroundColor = colour});
        }
           
}


createGrid(16, 16);
paint('green');