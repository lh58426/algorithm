/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let ret = [];
  function backtrack(row, path) {
    if (row === n) {
      ret.push(
        path.map((i) => {
          let arr = new Array(n).fill(".");
          arr[i] = "Q";
          return arr.join("");
        })
      );
    }
    for (let col = 0; col < n; col++) {
      let disabled = path.some(
        (c, r) => c === col || r - c === row - col || r + c === row + col
      );
      if (disabled) {
        continue;
      }
      backtrack(row + 1, [...path, col]);
    }
  }
  backtrack(0, []);
  return ret;
};
// @lc code=end
