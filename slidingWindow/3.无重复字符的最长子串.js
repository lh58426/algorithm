/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let len = 0;
  let tmp = [];
  for (let i = 0; i < s.length; i++) {
    if (tmp.indexOf(s[i]) > -1) {
      tmp.splice(0, tmp.indexOf(s[i]) + 1);
    } 
    tmp.push(s[i]);
    len = Math.max(len, tmp.length);
  }
  return len;
};
// @lc code=end
