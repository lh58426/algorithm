/*
 * @lc app=leetcode.cn id=1472 lang=javascript
 *
 * [1472] 设计浏览器历史记录
 */

// @lc code=start
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.stack = [homepage];
  this.cur = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  // idx = cur 后面的全部截断
  this.stack.length = this.cur + 1;
  this.stack.push(url);
  this.cur++;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  this.cur = Math.max(0, this.cur - steps);
  return this.stack[this.cur];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  this.cur = Math.min(this.stack.length - 1, this.cur + steps);
  return this.stack[this.cur];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// @lc code=end
