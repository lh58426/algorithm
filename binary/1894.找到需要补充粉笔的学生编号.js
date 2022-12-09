/*
 * @lc app=leetcode.cn id=1894 lang=javascript
 *
 * [1894] 找到需要补充粉笔的学生编号
 */

// @lc code=start
/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  let n = chalk.length;
  let preSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + chalk[i];
  }
  k %= preSum[n];
  let left = 0,
    right = n - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (preSum[mid + 1] > k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
// @lc code=end
