// 1. 双指针, 相当于判断indexS有没有到字符串最后
var isSubsequence = function(s, t) {
    let indexS = 0, indexT = 0;
    let lenS = s.length, lenT = t.length;

    while (indexS < lenS && indexT < lenT) {
        if (s[indexS] === t[indexT]) {
            ++indexS;
            ++indexT;
        }
        else {
            ++indexT;
        }
    }

    return indexS === lenS;
};


// 2.递归
// 就是将字符串截取到更短的字符串
var isSubsequence = function(s, t) {
    const helper = (s, t) => {
        if (s.length < 1)
            return true;
        if (t.length < 1)
            return false;
            
        let first = t.indexOf(s[0]);

        if (first === -1)
            return false;
        else 
            return helper(s.slice(1), t.slice(first + 1));
    };

    return helper(s, t);
};

