// FUEL

let fuelAmount = 100;

const fuel = new Image();
fuel.src = `img/fuel.png`;

let fuelPosition = {
    x: 12 * box,
    y: 8 * box,
};

let fuelCoordinates = [{ x: 0, y: 0 }, { x: 0, y: 0 },{ x: 0, y: 0 }, { x: 0, y: 0 }];

function getFuelCoordinates(fuelPos) {
    fuelCoordinates[0].x = fuelPos.x;
    fuelCoordinates[0].y = fuelPos.y;

    fuelCoordinates[1].x = fuelPos.x + box * 1;
    fuelCoordinates[1].y = fuelPos.y;

    fuelCoordinates[2].x = fuelPos.x;
    fuelCoordinates[2].y = fuelPos.y + box * 2;

    fuelCoordinates[3].x = fuelPos.x + box * 1;
    fuelCoordinates[3].y = fuelPos.y + box * 2;

    return fuelCoordinates;
}

