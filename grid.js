// 3 x 3 . Flytta krysset.
var grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    ['x', ' ', ' ']    
];

function getPosition() {
    // Gå igenom grid, rad för rad.
    for (var i = 0; i < grid.length; i++) {
        // I varje rad letar vi efter x.
        var index = grid[i].indexOf('x');
        // När vi hittar x returnerar vi dess position
        // i är aktuell rad, index är kolumn
        if (index > -1) {
            return [i, index];
        }
    }
}

function moveIt(x,y) {
    // Hitta nuvarande position. Resultaten blir en array.
    let position = getPosition();
    
    // Töm den ruta där x fanns.
    grid[position[0]][position[1]] = ' ';
    
    // Placera x i den önskade positionen.
    grid[x][y] = 'x';
    
}

function printGrid() {
    grid.forEach(function(rad) {
        console.log(rad);
    })
    console.log("\n");
}

printGrid();
moveIt(2,2);
printGrid();
