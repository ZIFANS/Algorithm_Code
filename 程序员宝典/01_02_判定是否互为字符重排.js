// 1、排序
var CheckPermutation = function(s1, s2) {
    return s1.split('').sort().join('') === s2.split('').sort().join('');
};

// 2、