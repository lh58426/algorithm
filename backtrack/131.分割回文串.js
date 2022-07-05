/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */

function isPalindrome(s, l, r) {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
}

var partition = function (s) {
  let ret = [];
  let path = [];
  function backtrack(i = 0) {
    if (i === s.length) {
      ret.push([...path]);
      return;
    }
    for (let j = i; j < s.length; j++) {
      if (!isPalindrome(s, i, j)) {
        continue;
      }
      const str = s.substring(i, j + 1);
      path.push(str);
      backtrack(j + 1);
      path.pop();
    }
  }
  backtrack();
  return ret;
};
// @lc code=end
