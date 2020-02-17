// 自己的代码
// 想法就是：用两个栈，一个数据栈，一个最小值的栈,
// 主要在push时候，每次push的时候，如果min栈中栈顶元素小于要push的元素x ，则将栈顶元素push进去
// 否则push x元素到min栈的栈顶

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.data = [];
    this.minArr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.data.push(x);
    if (this.minArr.length === 0 ||  x <  this.minArr[this.minArr.length - 1]) {
        this.minArr.push(x);
    } else {
        this.minArr.push(this.minArr[this.minArr.length - 1]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.data.pop();
    this.minArr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minArr[this.minArr.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */