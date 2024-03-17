
var MyQueue = function () {
    this.stack = []
    this.subStack = []
}

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack.push(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {

    while (this.stack.length > 0) {
        this.subStack.push(this.stack.pop())
    }

    let data = this.subStack.pop()

    while (this.subStack.length > 0) {
        this.stack.push(this.subStack.pop())
    }

    return data
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {

    while (this.stack.length > 0) {
        this.subStack.push(this.stack.pop())
    }

    let data = this.subStack[this.subStack.length - 1]
    while (this.subStack.length > 0) {
        this.stack.push(this.subStack.pop())
    }

    return data
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */