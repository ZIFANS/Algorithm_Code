// 自己的代码
/*
思想：准备两个栈stack1, stack2;
添加元素时候，都向stack1中添加，
删除元素时候，如果stack2不为空，则删除stack2中的顶部元素;
如果stack2为空，则将stack1中的元素都添加到stack2，然后将stack2中顶部的元素删除。
*/

var CQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    const {stack1, stack2} = this;  // 利用解构，后面就不需要this.stack1 太长了
    if (stack2.length) {
        return stack2.pop();
    } else {
        while (stack1.length) {
            stack2.push(stack1.pop());
        }
        return stack2.pop() || -1;
    }
};

/** 
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */