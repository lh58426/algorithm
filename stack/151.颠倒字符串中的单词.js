/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str = s.trim();
  let queue = [];
  let word = "";
  for (let char of str) {
    // 注意 char 与 ' ' 比较
    if (char == " " && word) {
      queue.unshift(word);
      word = "";
    } else if (char != " ") {
      word += char;
    }
  }
  word && queue.unshift(word);
  return queue.join(" ");
};
// @lc code=end
