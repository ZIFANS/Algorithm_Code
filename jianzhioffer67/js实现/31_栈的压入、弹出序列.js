// 自己的代码
// 思想就是：如果下一个弹出的数组刚好是栈顶数字，那么直接弹出；
// 如果下一个弹出的数字不在栈顶，则把压栈序列中还没有入栈的数字压入辅助栈，
// 直到把下一个需要弹出的数字压入栈顶为止；如果所有数字都压入栈后，仍然没有找到下一个数字，那么该序列不可能是弹出序列
var validateStackSequences = function(pushed, popped) {
    let fuzhu = [];
    for (let i = 0; i < pushed.length; ++i) {
        fuzhu.push(pushed[i]);
        while (fuzhu.length > 0 && fuzhu[fuzhu.length - 1] === popped[0]) {
            fuzhu.pop();
            popped.shift();
        }
    }
    return popped.length === 0;
};

