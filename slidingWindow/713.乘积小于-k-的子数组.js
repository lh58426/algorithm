/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let res = 0;
  for (let i = 0, j = 0, s = 1; i < nums.length; i++) {
    s *= nums[i];
    while (j <= i && s >= k) {
      s /= nums[j++];
    }
    // 下标 j 到 i 的连续子数组 [i], [i, i - 1], ..., [i, ..., j]
    // 个数 i - j + 1
    res += i - j + 1;
  }
  return res;
};
// @lc code=end
