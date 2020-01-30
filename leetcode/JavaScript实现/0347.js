// 一直没AC掉，看了别人思想
var topKFrequent = function(nums, k) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let countOfNum = Array(nums.length);

    for(let key of map.keys()) {
        let value = map.get(key);
        if (countOfNum[value] === undefined) {
            countOfNum[value] = [key];
        } else {
            countOfNum[value].push(key);
        }
    }
    let ans = [];
    for (let i = countOfNum.length - 1; i >= 0 && ans.length < k; --i) {
        if (countOfNum[i] !== undefined) {
            ans = ans.concat(countOfNum[i]);
        }
    }
    return ans;
};
