//自己的代码，效率贼低
// 第一种思想：就是设置了数据栈，一个数组，数组排序，但是不是O(1)的操作
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.dataStack = [];
    this.minArr = [];    // 数据栈，最小的数组
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.dataStack.push(x);
    this.minArr.push(x);
    this.minArr.sort((a, b) => {
        return a - b;
    });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let pop = this.dataStack.pop();
    let index = this.minArr.indexOf(pop);
    this.minArr.splice(index, 1);
    this.minArr.sort((a, b) => {
        return a - b;
    });
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let len = this.dataStack.length;
    return this.dataStack[len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minArr[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */



 

 // 第二种思想：就是设置了一个数据栈和最小的栈
 /**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.dataStack = [];
    this.minArr = [];    
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.dataStack.push(x);
    if(this.minArr.length === 0 || x < this.minArr[this.minArr.length - 1]) {
        this.minArr.push(x);
    } else {
        this.minArr.push(this.minArr[this.minArr.length - 1]);
    }    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.dataStack.pop();
    this.minArr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.dataStack[this.dataStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minArr[this.minArr.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */