namespace RemoveNumber {

  export function removeNumber(s: string, n: number) {
    let i = 0;
    let skips = 0;
    let result = '';

    while (i < s.length) {
      if (skips >= n) {
        result += s[i];
        i++;
        continue;
      }

      if (s.length - i <= n) {
        break;
      }

      const maxIndexInWindow = getIndexOfMaxNumberInWindow(s, i, i + n - skips + 1);
      result += s[maxIndexInWindow];
      skips += maxIndexInWindow - i;
      i = maxIndexInWindow + 1;


    }

    return result;
  }
  
  function getIndexOfMaxNumberInWindow(s: string, start: number, end: number) {
    let maxIndex = start;
    while (start < end && start < s.length) {
      if (s[start] > s[maxIndex]) {
        maxIndex = start;
      }
      start++;
    }

    return maxIndex;
  }
  
  // console.log(removeNumber('923458766', 3));
  // console.log(removeNumber('92345', 3));
  // console.log(removeNumber('2345', 3));
  console.log(removeNumber('9234', 3));


}
