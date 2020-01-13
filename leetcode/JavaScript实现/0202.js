// 自己代码
// 就是把出现的数，放到set里面，如果set出现过 返回false
var isHappy = function(n) {
    let set1 = new Set();
    let sum, s = n.toString();
    while(sum !== 1) {
        sum = 0;
        for(let i = 0; i < s.length; ++i) {
            sum += Math.pow(s[i] - 0, 2);
        }
        s = sum.toString();
        if(set1.has(sum))
            return false;
        set1.add(sum);
    }
    return true;
};
