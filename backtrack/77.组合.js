/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let ret = [];
  let path = [];
  function backtrack(n, k, i) {
    const len = path.length;
    if (len === k) {
      ret.push([...path]);
      return;
    }
    // [j, n] 中数的个数要能满足组合剩下所需数的个数
    // n - j + 1 >= k - len => j <= n - k + len + 1
    for (let j = i; j <= n - k + len + 1; j++) {
      path.push(j);
      backtrack(n, k, j + 1);
      path.pop();
    }
  }
  backtrack(n, k, 1);
  return ret;
};
// @lc code=end
