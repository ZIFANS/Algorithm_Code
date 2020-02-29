var restoreIpAddresses = function (s) {
    if (s.length > 12) 
        return [];
    let result = [];
    fn(s, [], result);
    return result;
};
function fn(remain, temp, result) {
    if (temp.length === 3) {
        regular(remain) && result.push([...temp, remain].join('.'));
        return;
    }
    for (let i = 1; i < 4; i++) {
        regular(remain.slice(0, i)) && fn(remain.slice(i), [...temp, remain.slice(0, i)], result);
    }
}
// 判断是否合法IP地址
function regular(s) {
    if (!s.length) 
        return false
    return 0 <= +s && +s <= 255 && (s.length > 1 ? !!+s[0] : true);
}