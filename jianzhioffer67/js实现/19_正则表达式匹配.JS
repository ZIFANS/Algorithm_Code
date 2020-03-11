// 一行的正则搞定
var isMatch = function (s, p) {
    return new RegExp("^" + p + "$").test(s);
};
function timeout(ms) {
    return new Promise((resovle) => {
        setTimeout(resovle, ms);
    });
}
async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}
asyncPrint('zgj', 3000);