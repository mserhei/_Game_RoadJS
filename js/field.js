// ROAD

const road = new Image();
road.src = `img/road.png`;

// NEED FOR SPEED (IMAGE)

const nfs = new Image();
nfs.src = `img/nfs.png`;

// TREES

const tree1 = new Image();
tree1.src = `img/tree1.png`;

const tree2 = new Image();
tree2.src = `img/tree2.png`;

const tree3 = new Image();
tree3.src = `img/tree3.png`;

let tree1Position = [{ x: 2 * box, y: -1 * box }, { x: 3 * box, y: 8 * box },
    { x: 1 * box, y: 13 * box }, { x: 21 * box, y: 5 * box },
    { x: 22 * box, y: 10 * box }, { x: 23 * box, y: 12 * box }];
    
    let tree2Position = [{ x: 2 * box, y: 6 * box }, { x: 3 * box, y: 5 * box },
    { x: 1 * box, y: 11 * box }, { x: 21 * box, y: 9 * box },
    { x: 22 * box, y: 7 * box }, { x: 23 * box, y: 2 * box }];
    
    let tree3Position = [{ x: 2 * box, y: 14 * box }, { x: 3 * box, y: 16 * box },
    { x: 1 * box, y: 2 * box }, { x: 21 * box, y: 17 * box },
    { x: 22 * box, y: 15 * box }, { x: 23 * box, y: 10 * box }];