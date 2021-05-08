
const parentChildPairs = [
    [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
    [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9]
];

const topLevel: Record<number, number[]> = {};
const output: Record<number, number[]> = {};

for (let i = 0; i < parentChildPairs.length; i++) {
    const parent = parentChildPairs[i][0];
    const child = parentChildPairs[i][1];

    topLevel[parent] = (topLevel[parent] || []);
    topLevel[parent].push(child);
}

console.log(topLevel);
for (let key in topLevel) {
    processNode(parseInt(key));
}
console.log(output);
// const o = processNode(4);
// console.log(o);
// console.log(o.length);
function processNode(k: number) {
    let stack: number[] = [k];
    const v = topLevel[k];
    if (v) {
        // console.log(v);
        v.forEach(val => {
            val = Number(val);
            if (!output[val]) {
                const s = processNode(val);
                output[val] = s;
                stack = stack.concat(s);
                // console.log(stack);

            } else {
                console.log(`have ${val}, returning ${output[val]}`)
                stack = stack.concat(output[val]);
                // console.log(stack);
            }
        });
    }

    return stack;
}