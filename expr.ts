// ( + 7 ( * 8 12 ) ( * 2 (+ 9 4) 7 ) 3 ) 
const operators = new Set<string>();
operators.add("+").add("-").add("*").add("/");

function evaluate(exp: string): number {
    if (!exp) return 0;
    let exprs = exp.split(" ");

    let s: string[] = [];
    let i = 0;
    while (i < exprs.length) {
        if (exprs[i] !== ")") {
            s.push(exprs[i]);
        } else {
            // keep popping till you hit a operator
            let operands: number[] = [];
            while (true) {
                let last = s.pop();
                if (operators.has(last)) {
                    // hit an operator
                    // evaluate the expr, add it back to the stack
                    let exprResult = 0;
                    if (last === "+") {
                        exprResult = operands.reduce((a, b) => a + b);
                    }
                    if (last === "-") {
                        exprResult = operands.reduce((a, b) => a - b);
                    }
                    if (last === "*") {
                        exprResult = operands.reduce((a, b) => a * b);
                    }
                    if (last === "/") {
                        exprResult = operands.reduce((a, b) => a / b);
                    }

                    // pop one more time to get "(" out
                    s.pop();

                    console.log(operands + ":" + exprResult);
                    s.push("" + exprResult);
                    break;
                } else {
                    operands.push(parseInt(last, 10));
                }
            }
        }

        i++;
    }

    console.log(s.pop());
}

evaluate("( + 7 ( * 8 12 ) ( * 2 ( + 9 4 ) 7 ) 3 )");