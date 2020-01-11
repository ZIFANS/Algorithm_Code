
// 自己代码
// 思想很简单
// 1、js抓位置，该位置对比后一个位置的值，比后一个值大，之前用，比后一个值小，加上后一个值再进行运算
// 2、1>undefind 是false,所以最后一位i的判断需要提前判断i+1是否存在

var romanToInt = function(s) {
    const romaWord = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let ans = 0;
    for(let i = 0; i < s.length; ++i) {
        if(romaWord[s[i]] < romaWord[s[i + 1]]) {
            ans += romaWord[s[i + 1]] - romaWord[s[i]];
            i++;
        } else {
            ans += romaWord[s[i]];
        }
    }
    return ans;
};