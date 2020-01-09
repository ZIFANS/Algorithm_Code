
// 自己的代码
// 第一想法有一个栈来做
// 遇到左括号将其压入栈，遇到右括号将栈顶弹出，看栈顶是否与右括号匹配
var isValid = function(s) {
    let stack = [], len = s.length;
    for(let i = 0; i < len; ++i) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{' ) {
            stack.push(s[i]);
        } else if(s[i] === ')') {
            if(stack.pop() !== '(')
                return false;
        } else if(s[i] === ']') {
            if(stack.pop() !== '[')
                return false;
        } else if(s[i] === '}') {
            if(stack.pop() !== '{')
                return false;
        }
    }
    return stack.length === 0 ? true : false;
};