/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

/**
 * 双指针滑动窗口, 一次遍历
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let len = nums.length;
  let slow = (fast = 0);
  let sum = 0;
  let result = len + 1;
  while (fast < len) {
    sum += nums[fast++];
    while (sum >= target) {
      let subLen = fast - slow;
      result = result < subLen ? result : subLen;
      sum -= nums[slow++];
    }
  }
  return result > len ? 0 : result;
};
// @lc code=end
