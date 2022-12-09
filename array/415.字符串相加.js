/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let res = [];
  let [i, j, carry] = [num1.length - 1, num2.length - 1, 0];
  for (; i >= 0 || j >= 0 || carry; i--, j--) {
    carry += i < 0 ? 0 : parseInt(num1.charAt(i), 10);
    carry += j < 0 ? 0 : parseInt(num2.charAt(j), 10);
    res.push(carry % 10);
    carry = Math.floor(carry / 10);
  }
  return res.reverse().join("");
};
// @lc code=end
