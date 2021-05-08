function mergeSort(ar: number[]): number[] {
    console.log(`Input: ${ar}`)
    return mergeSortHelper1(ar);
}

function mergeSortHelper1(ar: number[]) {
    if (ar.length <= 1) {
        return ar;
    }

    const start = 0;
    const end = ar.length - 1;
    const middle = Math.floor((start + end) / 2);
    const left = mergeSortHelper1(ar.slice(start, middle + 1));
    const right = mergeSortHelper1(ar.slice(middle + 1));
    const sortedArray = mergeSortedArrays1(left, right);
    console.log(`middle: ${middle} Sorted Array: ${sortedArray}`);
    return sortedArray;
}

function mergeSortedArrays1(a: number[], b: number[]): number[] {
    const result: number[] = [];

    let i = 0, j = 0;
    const aEnd = a.length;
    const bEnd = b.length;
    while (i < aEnd && j < bEnd) {
        if (a[i] <= b[j]) {
            result.push(a[i++]);
        } else {
            result.push(b[j++]);
        }
    }

    while (i < aEnd) {
        result.push(a[i++]);
    }

    while (j < bEnd) {
        result.push(b[j++]);
    }

    return result;
}

function mergeSortHelper(ar: number[], temp: number[], start: number, end: number) {
    console.log(`start: ${start} end: ${end}`)
    if (start >= end) {
        return;
    }

    
    // console.log(`start: ${start} end: ${end}`);
    const middle = Math.floor((start + end) / 2);
    // console.log(`middle: ${middle}`);
    mergeSortHelper(ar, temp, start, middle);
    mergeSortHelper(ar, temp, middle + 1, end);
    mergeSortedArrays(ar, temp, start, middle, middle + 1, end);
    console.log(temp);
}

function mergeSortedArrays(a: number[], temp: number[], aStart: number, aEnd: number, bStart: number, bEnd: number) {
    console.log(aStart, aEnd, bStart, bEnd);
    let i = aStart, j = bStart;
    let k = aStart;
    while (i <= aEnd && j <= bEnd) {
        if (a[i] <= a[j]) {
            temp[k++] = a[i++];
        } else {
            temp[k++] = a[j++];
        }
    }

    while (i <= aEnd) {
        temp[k++] = a[i++];
    }

    while (j <= bEnd) {
        temp[k++] = a[j++];
    }

    while (--k >= aStart) {
        a[k] = temp[k];
    }
}

const temp: number[] = [];
const input = [4, 5, 2, 7, 1];
mergeSortHelper(input, temp, 0, input.length - 1);
console.log(input);
// console.log(mergeSort(input));
