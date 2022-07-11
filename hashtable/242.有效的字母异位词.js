/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in obj) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }

    if (t[i] in obj) {
      obj[t[i]]--;
    } else {
      obj[t[i]] = -1;
    }
  }
  return Object.keys(obj).every((key) => obj[key] === 0);
};
// @lc code=end
