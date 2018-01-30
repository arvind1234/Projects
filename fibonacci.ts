function fibonacci(n: number) {
    let f = 0, s = 1;
    let sum = 0;
    let result = [0 , 1];

    for (let i = 2; i < n; i++) {
        sum = f + s;
        result.push(sum);
        f = s;
        s = sum;
    }

    console.log(result.join(","));
}

fibonacci(10);