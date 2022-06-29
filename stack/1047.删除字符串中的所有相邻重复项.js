/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [];
  for (let x of s) {
    if (stack.length > 0 && x === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(x);
    }
  }
  return stack.join("");
};
// @lc code=end
