// 一行的正则搞定
var isMatch = function (s, p) {
    return new RegExp("^" + p + "$").test(s);
};
