function compressString(s: string) {
    let result: string = "";
    let lastChar = "";
    let lastCharCount = 1;
    for (let i = 0, l = s.length; i < l; i++) {
        if (s[i] === lastChar) {
            lastCharCount++;
        } else {
            if (lastChar) {
                result += lastChar + lastCharCount;
            }
            lastChar = s[i];
            lastCharCount = 1;
        }
    }

    result += lastChar + lastCharCount;
    console.log(result);
}

const inputs = ["aaa", "aab", "acccccbabbb"];
inputs.forEach((s) => compressString(s));