/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

function getSum(n) {
  let sum = 0;
  while (n) {
    sum += (n % 10) ** 2;
    n = Math.floor(n / 10);
  }
  return sum;
}

var isHappy = function (n) {
  let obj = {};
  while (true) {
    // 陷入循环
    if (n in obj) return false;
    // 快乐数
    if (n == 1) return true;
    obj[n] = true;
    n = getSum(n);
  }
};
// @lc code=end
