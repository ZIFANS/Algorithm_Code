
var MaxQueue = function() {
    this.queue = [];
    this.maxValue = -1;
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    return this.maxValue;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.maxValue = Math.max(this.maxValue, value);
    this.queue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if (this.queue.length > 0) {
        let front = this.queue.shift();
        if (this.queue.length === 0)
            this.maxValue = -1;
        if (front === this.maxValue) {
            this.maxValue = Math.max(...this.queue);
        }
        return front;
    } else {
        return -1;
    }
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */