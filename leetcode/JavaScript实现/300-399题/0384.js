/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.data = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.data;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const original = this.data;
    const ans = new Array(original.length);
    for (let i = 0; i < original.length; ++i) {
        let random = Math.random() * (i + 1) | 0;
        ans[i] = ans[random];
        ans[random] = original[i];
    }
    return ans;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */