// 1、用hash
var isUnique = function(astr) {
    let map = new Map();

    for (let i = 0; i < astr.length; ++i) {
        let val = map.get(astr[i]);

        if (val) {
            return false;
        } else {
            map.set(astr[i], 1);
        }
    }

    return true;
};

// 2、用Set,判断两者长度是否相等
var isUnique = function(astr) {
    return new Set(astr).size === astr.length;
};

// 3、用indexOf 与lastIndexOf
var isUnique = function(astr) {
    for (let i = 0; i < astr.length; ++i) {
        if (astr.indexOf(astr[i]) !== astr.lastIndexOf(astr[i]))
            return false;
    }

    return true;
};