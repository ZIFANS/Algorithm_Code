// 自己的两种无脑代码：
// 1：返回一个新的字符串
var replaceSpace = function(s) {
    let ans = "";

    for (let i = 0; i < s.length; ++i) {
        if (s[i] === ' ') {
            ans += '%20';
        } else {
            ans += s[i];
        }
    }

    return ans;
};

// 2:正则：
var replaceSpace = function(s) {
    return s.replace(/ /g, '%20');
};

// 前面两种都太容易和简单了
// 3：开始是想着不开辟新的数组或者字符串，但是JS对字符串操作好像不能 s[s.length] = a; 类似这样的赋值
// 所以还没有上面两种方法来的好。
var replaceSpace = function(s) {
    let count = 0;
    let len = s.length;

    for (let i = 0; i < len; ++i) {
        if (s[i] === ' ')
            ++count;
    }

    let temp = count;
    while (temp) {
        s += ' ';
        --temp;
    }

    let arr = s.split('');
    for (let i = len - 1; i >= 0; --i) {
        if (arr[i] !== ' ') {
            arr[i + 2 * count] = arr[i];
        } else {
            --count;
            arr[i + 2 * count] = '%';
            arr[i + 2 * count + 1] = '2';
            arr[i + 2 * count + 2] = '0';
        }
    }

    return arr.join('');
};