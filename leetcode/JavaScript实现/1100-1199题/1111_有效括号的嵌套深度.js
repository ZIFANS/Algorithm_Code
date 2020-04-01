// 1、开始连题目都没看懂，直接看题解才吧题目理解
var maxDepthAfterSplit = function(seq) {
    let temp = 0;

    return seq.split('').map((value, index) => {
        if (value === '(') {
            ++temp;
            return temp % 2;
        } else {
            let ans = temp % 2;
            --temp;
            return ans;
        }
    });
};

