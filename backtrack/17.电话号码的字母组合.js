/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const n = digits.length;
  if (n === 0) return [];
  let res = [];
  let path = [];
  function backtrack(i, n) {
    if (path.length === n) {
      res.push(path.join(""));
      return;
    }
    for (const v of map[digits[i]]) {
      path.push(v);
      backtrack(i + 1, n);
      path.pop();
    }
  }
  backtrack(0, n);
  return res;
};
// @lc code=end
