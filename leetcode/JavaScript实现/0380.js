/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.data = [];
    this.map = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    // list存的元素 方便后面random
    // map的key是list的值 value是在list中的索引
    if (this.map[val] !== undefined) {
        return false;
    }
    this.map[val] = this.data.length;
    this.data.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.map[val] === undefined) {
        return false;
    }
    const index = this.map[val];
    if (index !== this.data.length - 1) {
        const lastVal = this.data[this.data.length - 1];
        this.map[lastVal] = index;
        this.data[index] = lastVal;
    }
    this.map[val] = undefined;
    this.data.pop();
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.data[Math.floor(Math.random() * this.data.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */