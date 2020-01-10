
// 参考别人的想法
/*
思想：
首先利用sort的排序方法将数组按照编码排序，只需要校验array[0]和array[array.length-1]的值。
然后判断是否存在包含关系即array[0]包含于array[array.length-1]
最后对首尾两个值进行字符串匹配，得到公共前缀
*/
var longestCommonPrefix = function(strs) {
    strs.sort();
    if(strs.length == 0)
        return "";
    let first = strs[0], end = strs[strs.length - 1];
    let exp = new RegExp(`^${first}`)  // 正则，意思就是以first字符串为开头
    if(first === end || end.match(exp)) {
        return first;
    }
    for(let i = 0; i < first.length; ++i) {
        if(first[i] !== end[i]) {
            return first.slice(0, i);
        }
    }
};