
// Create the grid with custom values
function createGrid(height, width) {
    const container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    for (let i = 0; i < (width * height); i++) {
        const content = document.createElement('div');
        content.style.height = '30px';
        content.style.width = '30px';
        container.appendChild(content);
    }
    
}

createGrid(16, 16);