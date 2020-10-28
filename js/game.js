let box = 32;

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let score = 0;

// CAR CONTROL

document.addEventListener(`keydown`, direction);

function direction(event) {
    if (event.keyCode === 37 && myCarPosition.x > 5 * box) {
        myCarPosition.x -= box;
    }
    if (event.keyCode === 39 && myCarPosition.x < 18 * box) {
        myCarPosition.x += box;
    }
}

// DRAW GAME FUNC.

let adder = 1;

function drawGame() {

    car1Coordinates = getCarCoordinates(car1Position);
    car2Coordinates = getCarCoordinates(car2Position);
    car3Coordinates = getCarCoordinates(car3Position);
    car1BackCoordinates = getCarCoordinates(car1BackPosition);
    car2BackCoordinates = getCarCoordinates(car2BackPosition);
    car3BackCoordinates = getCarCoordinates(car3BackPosition);


    ctx.drawImage(road, 0, 0);
    ctx.drawImage(nfs, 21 * box, 14 * box);

    ctx.drawImage(myCar, myCarPosition.x, myCarPosition.y);

    // TREES POSITION

    for (let i = 0, tree1length = tree1Position.length; i < tree1length; i++) {
        if (tree1Position[i].y < box * 18) {
            ctx.drawImage(tree1, tree1Position[i].x, tree1Position[i].y)
            tree1Position[i].y += box;
        } else {
            tree1Position[i].y = -1 * box;
        }
    }

    for (let i = 0, tree2length = tree2Position.length; i < tree2length; i++) {
        if (tree2Position[i].y < box * 18) {
            ctx.drawImage(tree2, tree2Position[i].x, tree2Position[i].y)
            tree2Position[i].y += box;
        } else {
            tree2Position[i].y = -1 * box;
        }
    }

    for (let i = 0, tree3length = tree3Position.length; i < tree3length; i++) {
        if (tree3Position[i].y < box * 18) {
            ctx.drawImage(tree3, tree3Position[i].x, tree3Position[i].y)
            tree3Position[i].y += box;
        } else {
            tree3Position[i].y = -1 * box;
        }
    }

    // CAR POSITION 

    if (car1Position.y < box * 25) {
        ctx.drawImage(car1, car1Position.x, car1Position.y);
        car1Position.y += box;
    } else {
        car1Position.y = 0;
    }

    if (car2Position.y < box * 20) {
        ctx.drawImage(car2, car2Position.x, car2Position.y);
        car2Position.y += box;
    } else {
        car2Position.y = -1 * box;
    }

    if (car3Position.y < box * 30) {
        ctx.drawImage(car3, car3Position.x, car3Position.y);
        car3Position.y += box;
    } else {
        car3Position.y = -1 * box;
    }

    // FUEL POSITION

    if (fuelPosition.y < box * 30) {
        ctx.drawImage(fuel, fuelPosition.x, fuelPosition.y);
        fuelPosition.y += box;
    } else {
        fuelPosition.y = -1 * box;
    }

    ctx.fillStyle = `white`;
    ctx.font = `30px Arial`;
    ctx.fillText(`fuel: `, box * 1, box * 1);
    ctx.fillText(fuelAmount, box * 1, box * 2);

    ctx.fillText(`score: `, box * 21, box * 1);
    ctx.fillText(score, box * 21, box * 2);

    --fuelAmount;
    ++score;

    myCarCoordinates = getCarCoordinates(myCarPosition);

    

    fuelCoordinates = getFuelCoordinates(fuelPosition);

    for (let i = 0; i < myCarCoordinates.length; i++) {
        if (myCarCoordinates[i].x === fuelCoordinates[i].x && myCarCoordinates[i].y === fuelCoordinates[i].y) {
            fuelAmount = 100;
        }
    }

    for (let d = 0; d < 4; d++) {
        if (myCarCoordinates[d].x === car1Coordinates[d].x && myCarCoordinates[d].y === car1Coordinates[d].y) {
            console.log (`bang`);
        };
        
    }

    if(fuelAmount === -1) {
        clearInterval(gameRoad);
        clearInterval(gameRoadBack);
    }

};

function drawGameBack() {
    if (car1BackPosition.y < box * 150) {
        ctx.drawImage(car1Back, car1BackPosition.x, car1BackPosition.y);
        car1BackPosition.y += box;
    } else {
        car1BackPosition.y = -1 * box;
    }

    if (car2BackPosition.y < box * 200) {
        ctx.drawImage(car2Back, car2BackPosition.x, car2BackPosition.y);
        car2BackPosition.y += box;
    } else {
        car2BackPosition.y = -1 * box;
    }

    if (car3BackPosition.y < box * 250) {
        ctx.drawImage(car3Back, car3BackPosition.x, car3BackPosition.y);
        car3BackPosition.y += box;
    } else {
        car3BackPosition.y = -1 * box;
    }
}

let gameRoad = setInterval(drawGame, 200);
let gameRoadBack = setInterval(drawGameBack, 70);
