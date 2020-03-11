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
