// 这题做过，但是牛顿法忘记了。参考别人的。
// 牛顿法
var mySqrt = function(x) {
    let ans = x;
    while(ans * ans > x) {
        const next = (ans + x / ans) / 2;
        if(next === ans) {
            break;
        } else {
            ans = next;
        }
    }
    return Math.floor(ans);
};


// 二分法好理解点
var mySqrt = function(x) {
    if(x === 0)
        return 0;
    else if (x < 4) 
        return 1;
    let left = 1;
    let right = x / 2 + 1;
    while(left < right) {
        let mid = (left + right + 1) >>> 1;
        let square =  mid * mid;
        if(square > x) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return left;
};
