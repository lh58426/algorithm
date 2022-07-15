/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function () {
  this.arr = [];
  this.map = {};
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (val in this.map) {
    return false;
  } else {
    this.arr.push(val);
    this.map[val] = this.arr.length - 1;
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (val in this.map) {
    let idx = this.map[val];
    let last = this.arr[this.arr.length - 1];
    this.arr[idx] = last;
    this.map[last] = idx;
    delete this.map[val];
    this.arr.pop();
    return true;
  } else {
    return false;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let i = Math.floor(Math.random() * this.arr.length);
  return this.arr[i];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
