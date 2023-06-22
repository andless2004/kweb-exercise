const ROW_MIN = 0;
const ROW_MAX = 6;
const COL_MIN = 0;
const COL_MAX = 7;
const current = { row: 5, col: 0 };

const getElementByPosition = pos => {
    const cellsEl = document.getElementsByClassName('cells')[pos.row];
    return cellsEl.getElementsByClassName('cell')[pos.col];
};

const getNewPositionByKey = key => {
    const pos = {
        row: current.row,
        col: current.col,
    }
    switch (key) {
        case 'ArrowUp': pos.row--; break;
        case 'ArrowDown': pos.row++; break;
        case 'ArrowLeft': pos.col--; break;
        case 'ArrowRight': pos.col++; break;
    }
    return pos;
};

const isPositionInRange = pos => (pos.row >= ROW_MIN) && (pos.row <= ROW_MAX) && (pos.col >= COL_MIN) && (pos.col <= COL_MAX); 
const isPositionWall = pos => getElementByPosition(pos).classList.contains('wall');
// 구조화 시켜서!

document.addEventListener('keyup', event => {
    getElementByPosition(current).classList.remove('current');
    // 키 얻는 방법
    const newPos = getNewPositionByKey(event.code);
    if (isPositionInRange(newPos) && !isPositionWall(newPos)) {
        current.row = newPos.row;
        current.col = newPos.col;
    }

    const newElmt = getElementByPosition(current);
    newElmt.classList.add('current');
    if (newElmt.classList.contains('target')) alert('You escaped!');
});