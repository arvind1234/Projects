// given an amount n and unlimited supply of coins, find number of ways in which the amount could be achieved

function coinChange(n: number, coins: number[], index: number): number {
    if (n === 0) {
        return 1;
    }

    if (n < 0 || index >= coins.length) {
        return 0;
    }

    let ways = 0;
    let amountWithCoin = 0;
    while (amountWithCoin <= n) {
        let remaining = n - amountWithCoin;
        ways += coinChange(remaining, coins, index + 1);
        amountWithCoin += coins[index];
    }

    return ways;
}

console.log(coinChange(10, [2, 3, 5, 6], 0));
console.log(coinChange(6, [2, 3, 5, 6], 0));


// Returns the count of ways we can sum  S[0...m-1] coins to get sum n
function coinChange1(S: number[], m: number, n: number) {
    // If n is 0 then there is 1 solution (do not include any coin)
    if (n == 0)
        return 1;
     
    // If n is less than 0 then no solution exists
    if (n < 0)
        return 0;
 
    // If there are no coins and n is greater than 0, then no solution exist
    if (m <= 0 && n >= 1)
        return 0;
 
    // count is sum of solutions (i) including S[m-1] (ii) excluding S[m-1]
    return coinChange1(S, m - 1, n) + coinChange1(S, m, n - S[m - 1]);
}
console.log(coinChange1([2, 3, 5, 6], 4, 10));
