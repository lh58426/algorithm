/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  const len = nums.length;
  const dp = new Array(len).fill(1);
  for (let i = 0; i < len - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      dp[i + 1] = dp[i] + 1;
    }
  }
  return Math.max(...dp);
};
// @lc code=end
