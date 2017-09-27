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

function moveIt(riktning) {
    // Hitta nuvarande position. Resultaten blir en array.
    let position = getPosition();
    x = position[0];
    y = position[1];
    
    // Töm den ruta där x fanns.
    grid[x][y] = ' ';
    
    switch (riktning) {
        case 1: x--; y--; break;
        case 2: x--; break;
        case 3: x--; y++; break;
        case 4: y--; break;
        case 6: y++; break;
        case 7: x++; y--; break;
        case 8: x++;  break;
        case 9: x++; y++; break;
    }
    
    x = (x < 0 ? 2 : x);
    y = (y < 0 ? 2 : y);

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
moveIt(2); // Flytta på den enligt en knappsats, dvs 2 = uppåt.
printGrid();
moveIt(6); // Flytta på den enligt en knappsats, dvs 2 = uppåt.
printGrid();
moveIt(7); // Flytta på den enligt en knappsats, dvs 2 = uppåt.
printGrid();
