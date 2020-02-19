// 自己的代码
// 第一想法暴力，43/44 最后一个测试用例过不去，所以暴力方法不行。
var constructArr = function(a) {
    let ans = [], len = a.length;
    for (let i = 0; i < len; ++i) {
        let temp = 1;
        for (let j = 0; j < len; ++j) {
            if (i !== j) {
                temp = temp * a[j];
            }
        }
        ans.push(temp);
    }
    return ans;
};


// 第二种方法：
var constructArr = function(a) {
    let ans = [];
    let index = 1;
    for (let i = 0; i < a.length; ++i) {
        ans[i] = index;
        index *= a[i];
    }
    index = 1;
    for (let i = a.length - 1; i >= 0; --i) {
        ans[i] *= index;
        index *= a[i];
    }
    return ans;
};
