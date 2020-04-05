// 1、模拟下就行了，暴力法，这个代码太长了
var reverseWords = function(s) {
    let noBlank = s.trim();
    let ans = "";
    let start = 0, end = 0;
    // flag 代表是否是第一个空格
    let flag = true;

    for (let i = 0; i < noBlank.length; ++i) {
        // 如果是第一个空格，ans后面就加 空格
        if (noBlank[i] === ' ' && flag) {
            end = i;
            let temp = noBlank.slice(start, end);
            ans += temp.split('').reverse().join('') + ' ';
            start = end;
            flag = false;
        // 不是第一个空格，ans不需要加 空格
        } else if (noBlank[i] === ' ' && !flag) {
            end = i;
            let temp = noBlank.slice(start, end);
            ans += temp.split('').reverse().join('');
            start = end;
        }
    }
    
    if (end !== noBlank.length - 1 && !flag) {
        ans += noBlank.slice(end + 1).split('').reverse().join('');
    } else {
        ans += noBlank.slice(end).split('').reverse().join('');
    }
    return ans;
};

// 2、用JS语法
var reverseWords = function(s) {
    let ans = s.split('').reverse().join('');
    return ans.split(' ').reverse().join(' ');
};
