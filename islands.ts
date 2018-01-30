type IslandType = { val: number, visited?: boolean };
function countIslands(a: Array<Array<IslandType>>, data: { result: number }) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[0].length; j++) {
            if (detectIsland(a, i, j)) {
                count++;
            }
        }
    }

    console.log(count);
}

function detectIsland(a: Array<Array<IslandType>>, x: number, y: number): boolean {
    if (a[x][y].visited || a[x][y].val === 1) {
        return false;
    }

    a[x][y].visited = true;
    if (x > 0) {
        detectIsland(a, x - 1, y);
    }

    if (x < a.length - 1) {
        detectIsland(a, x + 1, y);
    }

    if (y > 0) {
        detectIsland(a, x, y - 1);
    }

    if (y < a[0].length - 1) {
        detectIsland(a, x, y + 1);
    }

    return true;
}

let matrix = [
    [{ val: 1 },{ val: 1 },{ val: 0 },{ val: 1 },{ val: 0 }],
    [{ val: 1 },{ val: 0 },{ val: 1 },{ val: 0 },{ val: 1 }],
    [{ val: 1 },{ val: 1 },{ val: 0 },{ val: 1 },{ val: 1 }],
    [{ val: 1 },{ val: 1 },{ val: 1 },{ val: 0 },{ val: 1 }]
];

countIslands(matrix, { result: 0 });