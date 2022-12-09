/*
 * @lc app=leetcode.cn id=1898 lang=javascript
 *
 * [1898] 可移除字符的最大数目
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function (s, p, removable) {
  let left = 0,
    right = removable.length;
  while (left < right) {
    let mid = (left + right + 1) >> 1;
    if (isSub(s, p, new Set(removable.slice(0, mid)))) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

function isSub(str, sub, idxes) {
  let m = str.length,
    n = sub.length;
  let i = 0,
    j = 0;
  while (i < m && j < n) {
    if (!idxes.has(i) && str.charAt(i) === sub.charAt(j)) {
      ++j;
    }
    ++i;
  }
  return j === n;
}
// @lc code=end
