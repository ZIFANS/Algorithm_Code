// 1、hash
var numJewelsInStones = function (J, S) {
    let map = new Map();
    let ans = 0;
    for (let i = 0; i < J.length; ++i) {
        let val = map.get(J[i]);
        if (val) {
            map.set(J[i], 1);
        } else {
            map.set(J[i], 1);
        }
    }

    for (let i = 0; i < S.length; ++i) {
        let val = map.get(S[i]);

        if (val) {
            ++ans;
        }
    }

    return ans;
};

// 2、ES6写法
var numJewelsInStones = function(J, S) {
    let jArr = J.split('');
    let sArr = S.split('');

    return sArr.filter(item => jArr.includes(item)).length;
};
