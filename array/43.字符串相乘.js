/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  let m = num1.length,
    n = num2.length;
  let res = [];
  for (let i = 0; i < m; i++) {
    let a = parseInt(num1.charAt(m - i - 1), 10);
    let sum = 0;
    for (let j = 0; j < n || sum != 0; j++) {
      let b = j < n ? parseInt(num2.charAt(n - j - 1), 10) : 0;
      sum += a * b + (res[i + j] || 0);
      res[i + j] = sum % 10;
      sum = Math.floor(sum / 10);
    }
  }
  return res.reverse().join("");
};
// @lc code=end
