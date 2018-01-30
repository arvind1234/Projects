// given an amount n and unlimited supply of coins, print all ways in which n can be achieved

function coinChange(n: number, coins: number[], result: number[], index: number) {
    result = result.slice(0); 
    // console.log(n, coins, result);
    if (n < 0) {
        return;
    }

    if (n === 0) {
        console.log("Result", result);
        return;
    }

    let amountWithCoin = 0;
    while (amountWithCoin <= n) {
        let remaining = n - coins[index];
        result.push(coins[index]);
        coinChange(remaining, coins, result, index + 1);
        // result = result.slice(0, -1);
        amountWithCoin += coins[index];
    }

    /*
        for (let i = 0; i < coins.length; i++) {
            let coin = coins[i];
            if (coin <= n) {
                // console.log("!!", n, result);
                result.push(coin);
                coinChange(n - coin, coins, result);
                // console.log("$$", n, result, result);
                result = result.slice(0, -1);
                // console.log("@@", n, result, result);
            }
        }
    */
}

coinChange(7, [2, 3, 5, 6], [], 0);