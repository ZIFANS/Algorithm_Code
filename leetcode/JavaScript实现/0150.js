/**
 * 自己的代码
 * 就是暴力解，if else 其实有点丑，可以换成switch 稍微好看点
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; ++i) {
        if (Number.isInteger(parseInt(tokens[i]))) {
            stack.push(parseInt(tokens[i]));
        }
        if (tokens[i] === '+') {
            let pop1 = stack.pop(), pop2 = stack.pop();
            let tempAns = parseInt(pop2) + parseInt(pop1);
            stack.push(tempAns);
        }
        else if (tokens[i] === '-') {
            let pop1 = stack.pop(), pop2 = stack.pop();
            let tempAns = parseInt(pop2) - parseInt(pop1);
            stack.push(tempAns);
        }
        else if (tokens[i] === '*') {
            let pop1 = stack.pop(), pop2 = stack.pop();
            let tempAns = parseInt(pop2) * parseInt(pop1);
            stack.push(tempAns);
        }
        else if (tokens[i] === '/') {
            let pop1 = stack.pop(), pop2 = stack.pop();
            let tempAns = Math.trunc(parseInt(pop2) / parseInt(pop1));
            stack.push(tempAns);
        }
    }
    return stack[0];
};