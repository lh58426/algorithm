/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

/**
 * 队列先进先出
 * 栈后进先出
 */

var MyStack = function () {
  this.queue1 = [];
  // 备份队列1
  this.queue2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (!this.queue1.length) {
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
  }
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }
  return this.queue1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  const x = this.pop();
  this.push(x);
  return x;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue1.length && !this.queue2.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
