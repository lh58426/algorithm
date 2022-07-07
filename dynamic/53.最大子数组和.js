/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  /*
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  let ret = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    ret = Math.max(dp[i], ret);
  }
  */
  let ret = -Infinity;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
    if (count > ret) {
      ret = count;
    }
    // 相当于 dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]) 取 nums[i] 时
    if (count < 0) {
      count = 0;
    }
  }
  return ret;
};
// @lc code=end
