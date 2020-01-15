// 自己代码
// 第一想法就是慢慢截取
var strStr = function(haystack, needle) {
    let hayLen = haystack.length, needLen = needle.length;
    if(hayLen === 0 && needLen === 0)
        return 0;
    for(let i = 0; i < hayLen; ++i) {
        let temp = haystack.substr(i, needLen);
        if(temp === needle)
            return i;
    }
    return -1;
};
