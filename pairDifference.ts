// given a constant k and an array of increasing numbers, find all pairs in the array whose difference is k

// var a = [1,3,4,6,9] and k=2 
// output is (1,3) (4,6)

var a = [2, 3, 4, 6, 8, 9, 12, 12, 15, 18, 22];
var k = 0;

function getDifference(ar: number[], diff: number): Array<Array<number>> {
	const result: Array<Array<number>> = [];
	let i = 0, j = 1;
	while (j < ar.length && i < ar.length) {
		const delta = a[j] - a[i];
		console.log(`${i}, ${j} :: ${a[j]} - ${a[i]}=${delta}`);

		if (i === j) {
			j++;
			continue;
		}

		if (delta === diff) {
			result.push([a[i], a[j]]);
			i++;
		} else if (delta < diff) {
			j++;
		} else {
			i++;
		}
	}
	return result;
}

console.log(getDifference(a, k));

