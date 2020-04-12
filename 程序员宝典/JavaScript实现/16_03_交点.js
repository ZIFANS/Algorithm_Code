// 1、别人的代码，这题不会 只是为了得每日一天的积分。
var inside = function(x1, x2, y1, y2, xk, yk) {
    return (x1 === x2 || (Math.min(x1, x2) <= xk && xk <= Math.max(x1, x2))) && (y1 === y2 || (Math.min(y1, y2) <= yk && yk <= Math.max(y1, y2)))
}
var update = function(ans, x, y) {
    if (!ans.length || x < ans[0] || (x === ans[0] && y < ans[1])) {
        ans[0] = x
        ans[1] = y
    }
    return ans
}
var intersection = function(start1, end1, start2, end2) {
    let x1 = start1[0], y1 = start1[1], x2 = end1[0], y2 = end1[1]
    let x3 = start2[0], y3 = start2[1], x4 = end2[0], y4 = end2[1]
    let ans = []
    // 若两直线平行
    if ((y4 - y3) * (x2 - x1) === (y2 - y1) * (x4 - x3)) {
        // 若两线段有重合
        if ((y2 - y1) * (x3 - x1) === (y3 - y1) * (x2 - x1)) {
            //分别判断四个点
            if(inside(x1, x2, y1, y2, x3, y3)){
                ans = update(ans, x3, y3)
            }
            if(inside(x1, x2, y1, y2, x4, y4)){
                ans = update(ans, x4, y4)
            }
            if(inside(x3, x4, y3, y4, x1, y1)){
                ans = update(ans, x1, y1)
            }
            if(inside(x3, x4, y3, y4, x2, y2)){
                ans = update(ans, x2, y2)
            }
        }
    } else {
        // 联立方程得到 t1 和 t2 的值
        let t1 = (x3 * (y4 - y3) + y1 * (x4 - x3) - y3 * (x4 - x3) - x1 * (y4 - y3)) / ((x2 - x1) * (y4 - y3) - (x4 - x3) * (y2 - y1));
        let t2 = (x1 * (y2 - y1) + y3 * (x2 - x1) - y1 * (x2 - x1) - x3 * (y2 - y1)) / ((x4 - x3) * (y2 - y1) - (x2 - x1) * (y4 - y3));
        // 判断 t1 和 t2 是否均在 [0, 1] 之间
        if (t1 >= 0.0 && t1 <= 1.0 && t2 >= 0.0 && t2 <= 1.0) {
            ans[0] = x1 + t1 * (x2 - x1)
            ans[1] = y1 + t1 * (y2 - y1)
        }
    }
    return ans;
};
