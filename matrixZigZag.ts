function matrixZigZag() {
    const matrix = [];
    const m = 5,
          n = 5;
    const output: number[] = [];
    let i = 0,
        j = 0;
    let tempArray;

    for (i = 0; i < m; i++) {
        tempArray = [];
        for (j = 0; j < n; j++) {
            tempArray.push(i * n + j);
        }
        matrix.push(tempArray);
    }

    i = j = 0;
    while (true) {
        if (i >= m && j >= n) {
            console.log(output);
            break;
        }

        while (i >= 0 && j < n) {
            output.push(matrix[i][j]);
            i--; j++;
        }

        if (i === -1 && j === n) {
            i = i + 2;
            j = j - 1;
        } else if (i === -1) {
            i = i + 1;
        } else {
            i = i + 2;
            j = j - 1;
        }

        while (i < m && j >= 0) {
            output.push(matrix[i][j]);
            i++; j--;
        }

        if (i === m && j === -1) {
            i = i - 1;
            j = j + 2;
        } else if (i === m) {
            i = i - 1;
            j = j + 2;
        } else {
            j = j + 1;
        }
    }
}

matrixZigZag();