// function that decompresses string
// 2[x]3[ab2[cd]]ts => xx abcdcd abcdcd abcdcd ts

function decompressString(str: string) {
    console.log(str);
    let s: Array<string> = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "]") {
            s.push(str[i]);
        } else {
            // hit "]", keep popping until you hit "["
            console.log(s);
            let group = [];
            while (true) {
                const poppedChar = s.pop();
                if (!poppedChar || poppedChar === "[") {
                    break;
                }

                group.push(poppedChar);
            }

            let groupStr = group.reverse().join("");
            console.log(groupStr);

            // group has been extracted, extract the count
            let groupCountStr = "";
            while (true) {
                const poppedChar = s.pop();
                if (!poppedChar) {
                    break;
                }

                if (poppedChar.match(/\d/)) {
                    groupCountStr += poppedChar;
                } else {
                    // add the popped char back into the stack
                    s.push(poppedChar);
                    break;
                }
            }

            groupCountStr = groupCountStr.split("").reverse().join("");

            let groupCount = parseInt(groupCountStr, 10);

            let decompressedGroupString = "";
            for (let i = 0; i < groupCount; i++) {
                decompressedGroupString += groupStr;
            }

            console.log(groupCount, decompressedGroupString);
            s.push(decompressedGroupString);
        }
    }

    let result = s.join("");

    console.log(result, result === "xxabcdcdabcdcdabcdcdts");
}

decompressString("2[x]3[ab2[cd]]ts");