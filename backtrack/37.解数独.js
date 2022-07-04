/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        // 非空白格
        continue;
      }
      for (let k = 1; k <= 9; k++) {
        k = k.toString();
        if (isValid(board, i, j, k)) {
          board[i][j] = k;
          // 放下一个数字的解
          if (solveSudoku(board)) {
            return true;
          }
          // 回溯
          board[i][j] = ".";
        }
      }
      return false;
    }
  }
  return true;
};

function isValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num || board[row][i] === num) {
      return false;
    }
  }
  // 3 * 3 宫格的起点
  const x = Math.floor(row / 3) * 3;
  const y = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[x + i][y + j] === num) {
        return false;
      }
    }
  }
  return true;
}
// @lc code=end
