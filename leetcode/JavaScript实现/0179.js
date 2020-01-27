// 自己的代码
// 思想：就是先排序，但是nums.sort() 普通排序只是字典序，所以要改进下
var largestNumber = function(nums) {
    nums.sort((a, b) => {
        let tem1 = a + '' + b;
        let tem2 = b + '' + a;
        if(tem1 < tem2)
            return 1;
        else if(tem1 > tem2)
            return -1;
        else 
            return 0;
    });
    let ans = "";
    for (let i = 0; i < nums.length; ++i) {
        ans += nums[i];
    }
    if(parseInt(ans) === 0) // 如果ans 为 000 00 都等于 0 
        ans = "0";
    return ans;
};
