// 自己的代码
// 第一想法就是哈希，第二想法就是排序。因为排序的时间复杂度高点，
// 但是排序的算法代码更加容易，所以还是有排序实现。
var isAnagram = function(s, t) {
    let ss = s.split('').sort().join('');
    let tt = t.split('').sort().join('');
    return ss === tt;
};