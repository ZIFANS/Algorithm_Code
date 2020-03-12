// hash法
var longestPalindrome = function(s) {
    let map = new Map();
    let ans = 0;
    let single = false;

    for (let num of s) {
        let val = map.get(num);
        if (!val)
            map.set(num, 1);
        else 
            map.set(num, val + 1);
    }
    map.forEach((item, index) => {
        if (item % 2 === 0)
            ans += item;
        else {
            single = true;
            if (item > 1) {
                ans += item - 1;
            }
        }
    });
    if (single)
        ans += 1;
    return ans;
};

// 与上面一样，只是增加了不同遍历方法
var longestPalindrome = function(s) {
    let map = new Map();
    let flag = false;
    let ans = 0;

    for (let i = 0; i < s.length; ++i) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    for (let [key, val] of map) {
        if (val % 2 === 0) 
            ans += val;
        else {
            flag = true;
            ans += val - 1;
        }
    }
    if (flag)
        ans += 1;
    return ans;
};