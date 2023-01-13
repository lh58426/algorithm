/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  // BFS
  const queue = [];
  const m = mat.length,
    n = mat[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        //  数组中 1 的位置设置成 -1，表示未访问过
        mat[i][j] = -1;
      }
    }
  }
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let newX = x + dx[i];
      let newY = y + dy[i];
      if (
        newX >= 0 &&
        newX < m &&
        newY >= 0 &&
        newY < n &&
        mat[newX][newY] === -1
      ) {
        mat[newX][newY] = mat[x][y] + 1;
        queue.push([newX, newY]);
      }
    }
  }
  return mat;
  /* DP
  const m = mat.length,
    n = mat[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(Infinity));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        dp[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
      if (j > 0) dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i < m - 1) dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
      if (j < n - 1) dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
    }
  }
  return dp;
  */
};
// @lc code=end
