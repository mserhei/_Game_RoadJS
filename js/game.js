let box = 32;



const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const road = new Image();
road.src = `img/road.png`;

//  -   -   -   -   -   -   -    CARS

const myCar = new Image();
myCar.src = `img/mycar.png`;

let myCarPosition = {
    x: 12 * box,
    y: 12 * box,
};

let myCarCoordinates = [];

const car1 = new Image();
car1.src = `img/car1.png`;

let car1Position = {
    x: 18 * box,
    y: 14 * box,
};

const car2 = new Image();
car2.src = `img/car2.png`;

let car2Position = {
    x: 16 * box,
    y: 3 * box,
};

const car3 = new Image();
car3.src = `img/car3.png`;

let car3Position = {
    x: 14 * box,
    y: 8 * box,
};

const car1Back = new Image();
car1Back.src = `img/car1Back.png`;

let car1BackPosition = {
    x: 7 * box,
    y: 8 * box,
};

const car2Back = new Image();
car2Back.src = `img/car2Back.png`;

let car2BackPosition = {
    x: 5 * box,
    y: 8 * box,
};

const car3Back = new Image();
car3Back.src = `img/car3Back.png`;

let car3BackPosition = {
    x: 9 * box,
    y: 8 * box,
};

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


//  -   -   -   -   -   -   -    FUEL

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





//  -   -   -   -   -   -   -    FUEL

const nfs = new Image();
nfs.src = `img/nfs.png`

const tree1 = new Image();
tree1.src = `img/tree1.png`;

const tree2 = new Image();
tree2.src = `img/tree2.png`;

const tree3 = new Image();
tree3.src = `img/tree3.png`;



let score = 0;



let tree1Position = [{ x: 2 * box, y: -1 * box }, { x: 3 * box, y: 8 * box },
{ x: 1 * box, y: 13 * box }, { x: 21 * box, y: 5 * box },
{ x: 22 * box, y: 10 * box }, { x: 23 * box, y: 12 * box }];

let tree2Position = [{ x: 2 * box, y: 6 * box }, { x: 3 * box, y: 5 * box },
{ x: 1 * box, y: 11 * box }, { x: 21 * box, y: 9 * box },
{ x: 22 * box, y: 7 * box }, { x: 23 * box, y: 2 * box }];

let tree3Position = [{ x: 2 * box, y: 14 * box }, { x: 3 * box, y: 16 * box },
{ x: 1 * box, y: 2 * box }, { x: 21 * box, y: 17 * box },
{ x: 22 * box, y: 15 * box }, { x: 23 * box, y: 10 * box }];

//  -   -   -   -   -   -   -    смена позиции автомобиля

document.addEventListener(`keydown`, direction);


function direction(event) {
    if (event.keyCode === 37 && myCarPosition.x > 5 * box) {
        myCarPosition.x -= box;
    }
    if (event.keyCode === 39 && myCarPosition.x < 18 * box) {
        myCarPosition.x += box;
    }
}






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




// const canvas = document.getElementById("game");
// const ctx = canvas.getContext("2d");

// const ground = new Image();
// ground.src = `img/ground.png`;

// const foodImg = new Image();
// foodImg.src = `img/food.png`;

// const snakeImg = new Image();
// snakeImg.src = `img/snake-element.png`;

// const snakeBody = new Image();
// snakeBody.src = `img/snake-body.png`;

// let box = 32;

// let score = 0;

// let food = {
//     x: Math.floor(Math.random() * 18) * box,
//     y: Math.floor(Math.random() * 15 + 3) * box,
// };

// let snake = [];
// snake[0] = {
//     x: 9 * box,
//     y: 10 * box,
// }







// document.addEventListener(`keydown`, direction);

// let dir;

// function direction(event) {
//     if (event.keyCode == 37 && dir != `right`) {
//         dir = `left`;
//     } else if (event.keyCode == 38 && dir != `down`) {
//         dir = `up`;
//     }
//     else if (event.keyCode == 39 && dir != `left`) {
//         dir = `right`;
//     }
//     else if (event.keyCode == 40 && dir != `up`) {
//         dir = `down`;
//     }
// }

// function eatTail(head, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (head.x == arr[i].x && head.y == arr[i].y) {
//             clearInterval(game);
//             alert(`Ваш счет: ` + score);
//         }
//     }
// }


// function drawGame() {
//     ctx.drawImage(ground, 0, 0);
//     ctx.drawImage(foodImg, food.x, food.y);

//     for (let i = 0; i < snake.length; i++) {
//         if (i === 0) ctx.drawImage(snakeImg, snake[i].x, snake[i].y);
//         else ctx.drawImage(snakeBody, snake[i].x, snake[i].y);
//     }

//     ctx.fillStyle = `white`;
//     ctx.font = `50px Arial`;
//     ctx.fillText(score, box * 1, box * 1.7);

//     let snakeX = snake[0].x;
//     let snakeY = snake[0].y;

//     if (snakeX == food.x && snakeY == food.y) {
//         score++;
//         food = {
//             x: Math.floor(Math.random() * 16 + 2) * box,
//             y: Math.floor(Math.random() * 15 + 4) * box,
//         }
//     } else {
//         snake.pop();
//     }

//     if (snakeX < box || snakeX > box * 17
//         || snakeY < box * 3 || snakeY > box * 18) {
//         clearInterval(game);
//         alert(`Ваш счет: ` + score);
//     }

//     if (dir == `left`) snakeX -= box;
//     if (dir == `right`) snakeX += box;
//     if (dir == `up`) snakeY -= box;
//     if (dir == `down`) snakeY += box;

//     let newHead = {
//         x: snakeX,
//         y: snakeY,
//     }

//     eatTail(newHead, snake);

//     snake.unshift(newHead);
// }

// let game = setInterval(drawGame, 200);