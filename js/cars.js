// MY CAR

const myCar = new Image();
myCar.src = `img/mycar.png`;

let myCarPosition = {
    x: 12 * box,
    y: 12 * box,
};

let myCarCoordinates = [];

// CAR 1

const car1 = new Image();
car1.src = `img/car1.png`;

let car1Position = {
    x: 18 * box,
    y: 14 * box,
};

// CAR 2

const car2 = new Image();
car2.src = `img/car2.png`;

let car2Position = {
    x: 16 * box,
    y: 3 * box,
};

// CAR 3

const car3 = new Image();
car3.src = `img/car3.png`;

let car3Position = {
    x: 14 * box,
    y: 8 * box,
};

// CAR 1 BACK

const car1Back = new Image();
car1Back.src = `img/car1Back.png`;

let car1BackPosition = {
    x: 7 * box,
    y: 8 * box,
};

// CAR 2 BACK

const car2Back = new Image();
car2Back.src = `img/car2Back.png`;

let car2BackPosition = {
    x: 5 * box,
    y: 8 * box,
};

// CAR 3 BACK

const car3Back = new Image();
car3Back.src = `img/car3Back.png`;

let car3BackPosition = {
    x: 9 * box,
    y: 8 * box,
};

// GET CAR COORDINATES FUNC.

let carCoordinates = [{ x: 0, y: 0 }, { x: 0, y: 0 },
{ x: 0, y: 0 }, { x: 0, y: 0 }];

function getCarCoordinates(carPos) {
    carCoordinates[0].x = carPos.x;
    carCoordinates[0].y = carPos.y;

    carCoordinates[1].x = carPos.x + box * 2;
    carCoordinates[1].y = carPos.y;

    carCoordinates[2].x = carPos.x;
    carCoordinates[2].y = carPos.y + box * 4;

    carCoordinates[3].x = carPos.x + box * 2;
    carCoordinates[3].y = carPos.y + box * 4;

    return carCoordinates;
}