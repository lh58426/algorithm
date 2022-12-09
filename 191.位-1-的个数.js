/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let res = 0;
  while (n) {
    // n & n - 1 消除 n 二进制形式的最后一位 1
    n &= n - 1;
    res++;
  }
  return res;
};
// @lc code=end
