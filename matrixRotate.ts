function arRotate() {
    let ar = [];
    const m = 5,
          n = 5;
    let i = 0,
        j = 0;
    let tempArray;

    for (i = 0; i < m; i++) {
        tempArray = [];
        for (j = 0; j < n; j++) {
            tempArray.push(i * n + j);
        }
        ar.push(tempArray);
    }

    for (i = 0; i < m; i++) {
        console.log(ar[i].join(","));
    }

    console.log("");

    let x = [], y = [];
    for (let l = 0; l < n / 2; l++) {
        x.push(`${l}, ${n - 1 - l}`);
        for (let i = l; i < n - 1 - l; i++) {
            // store top
            x.push(`${l}, ${i}`);
            let top = ar[l][i];

            x.push(`${n - 1 - i}, ${l}`);
            // set left to top
            ar[l][i] = ar[n - 1 - i][l];

            x.push(`${n - 1 - l}, ${n - 1 - i}`);
            // set bottom to left
            ar[n - 1 - i][l] = ar[n - 1 - l][n - 1 - i];

            x.push(`${i}, ${n - 1 - l}`);
            // set right to bottom
            ar[n - 1 - l][n - 1 - i] = ar[i][n - 1 - l];

            // set top to right
            ar[i][n - 1 - l] = top;
        }
    }

    for (i = 0; i < m; i++) {
        console.log(ar[i].join(","));
    }

    console.log("");

    ar = [];
    for (i = 0; i < m; i++) {
        tempArray = [];
        for (j = 0; j < n; j++) {
            tempArray.push(i * n + j);
        }
        ar.push(tempArray);
    }

    for (i = 0; i < m; i++) {
        console.log(ar[i].join(","));
    }

    console.log("");

    for (let l = 0; l < n / 2; l++) {
        let first = l;
        let last = n - 1 - l;
        y.push(`${first}, ${last}`);
        for (let i = l; i < n - 1 - l; i++) {
            let offset = i - first;
            // store top
            y.push(`${first}, ${i}`);
            let top = ar[first][i];

            y.push(`${last - offset}, ${first}`);
            // set left to top
            ar[first][i] = ar[last - offset][first];

            y.push(`${last}, ${last - offset}`);
            // set bottom to left
            ar[last - offset][first] = ar[last][last - offset];

            y.push(`${i}, ${last}`);
            // set right to bottom
            ar[last][last - offset] = ar[i][last];

            // set top to right
            ar[i][last] = top;
        }
    }

    for (i = 0; i < m; i++) {
        console.log(ar[i].join(","));
    }

    console.log("x === y", x.length, y.length, x.length === y.length);
    for (var k = 0; k < y.length; k++) {
        if (x[k] === y[k]) {
            console.log("pass");
        } else {
            console.log("x === y", x[k], y[k]);
        }
    }
}

arRotate();