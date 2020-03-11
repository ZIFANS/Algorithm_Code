var subsetsWithDup = function(nums) {
    if (nums.length === 0)
        return [];
    
    let ans = [];
    nums.sort();
    backtrack(ans, [], nums, 0, nums.length);
    return ans;
};
function backtrack(ans, tempList, nums, start, n) {
    ans.push(tempList.concat());    //没有长度限制
    
    for (let i = start; i < n; ++i) {
        if (i > start && nums[i] === nums[i - 1]) { //★在过程中防止重复
            continue;
        }
        tempList.push(nums[i]);     //试探
        backtrack(ans, tempList, nums, i + 1, n);   //对结果集的子序列保证顺序，那么i+1
        tempList.pop();         //不管成功与否，退回上一步
    }
}