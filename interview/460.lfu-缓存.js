/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  // key: value
  this.cache = new Map();
  // key: times
  this.timesMap = new Map();
  // times: set(key)
  this.useMap = new Map();
  // min times
  this.min = 0;
};

LFUCache.prototype.updateCount = function (key) {
  let times = this.timesMap.get(key);
  let useSet = this.useMap.get(times);
  if (this.min === times && useSet.size === 1) {
    // 当前次数是最小值 并且 minSet 只有一个 key
    this.min += 1;
  }

  times += 1;
  useSet.delete(key);
  useSet = this.useMap.get(times) || new Set();
  useSet.add(key);
  this.useMap.set(times, useSet);
  this.timesMap.set(key, times);
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    this.updateCount(key);
    return this.cache.get(key);
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) return;
  if (this.cache.has(key)) {
    this.cache.set(key, value);
    this.updateCount(key);
  } else {
    if (this.cache.size === this.capacity) {
      // 缓存满了需要淘汰
      let minSet = this.useMap.get(this.min);
      let minKey = minSet.keys().next().value;
      minSet.delete(minKey);

      this.cache.delete(minKey);
      this.timesMap.delete(minKey);
    }

    this.cache.set(key, value);
    useSet = this.useMap.get(1) || new Set();
    useSet.add(key);
    this.useMap.set(1, useSet);
    this.timesMap.set(key, 1);
    this.min = 1;
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
