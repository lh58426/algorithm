/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let ret = [];
  let path = [];
  function backtrack(i = 0) {
    if (path.length > 4) {
      return;
    }
    if (path.length === 4 && i === s.length) {
      ret.push(path.join("."));
      return;
    }

    for (let j = i; j < s.length; j++) {
      const str = s.substring(i, j + 1);
      if (Number(str) > 255) {
        break;
      }
      if (str.length > 1 && str[0] === "0") {
        break;
      }
      path.push(str);
      backtrack(j + 1);
      path.pop();
    }
  }
  backtrack();
  return ret;
};
// @lc code=end
