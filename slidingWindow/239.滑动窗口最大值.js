/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = new Array(nums.length - k + 1);
  // 递减数组，数组大小小于等于窗口大小
  let queue = [];
  for (let i = 0; i < nums.length; i++) {
    // 维持单调递减性
    while (queue.length > 0 && queue[queue.length - 1] < nums[i]) {
      queue.pop();
    }
    queue.push(nums[i]);
    // 第 i - k 个元素不在滑动窗口内
    if (i >= k && nums[i - k] === queue[0]) {
      queue.shift();
    }
    if (i >= k - 1) {
      res[i - k + 1] = queue[0];
    }
  }
  return res;
};
// @lc code=end
