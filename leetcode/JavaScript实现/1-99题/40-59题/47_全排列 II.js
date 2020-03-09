var permuteUnique = function (nums) {
    const list = [];
    backtrack(list, nums.sort((a, b) => a - b), [], []);
    return list;
};
function backtrack(list, nums, tempList, visited) {
    if (tempList.length === nums.length) return list.push([...tempList]);
    for (let i = 0; i < nums.length; i++) {
        // 和46.permutations的区别是这道题的nums是可以重复的
        // 我们需要过滤这种情况
        if (visited[i]) continue; // 不能用tempList.includes(nums[i])了，因为有重复
        // visited[i - 1] 这个判断容易忽略
        if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1]) continue;

        visited[i] = true;
        tempList.push(nums[i]);
        backtrack(list, nums, tempList, visited);
        visited[i] = false;
        tempList.pop();
    }
}
