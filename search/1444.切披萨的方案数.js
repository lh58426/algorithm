/*
 * @lc app=leetcode.cn id=1444 lang=javascript
 *
 * [1444] 切披萨的方案数
 */

// @lc code=start
/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */

const MOD = 10 ** 9 + 7;

var ways = function (pizza, k) {
  const m = pizza.length,
    n = pizza[0].length;
  const s = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  const dp = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(k).fill(-1)));
  // s 为前缀和
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      s[i + 1][j + 1] =
        s[i + 1][j] + s[i][j + 1] - s[i][j] + (pizza[i][j] == "A" ? 1 : 0);
    }
  }

  function dfs(i, j, k) {
    // 空间换时间
    if (dp[i][j][k] != -1) {
      return dp[i][j][k];
    }
    // k = 0，判断剩余披萨是否有苹果
    if (k == 0) {
      return s[m][n] - s[m][j] - s[i][n] + s[i][j] > 0 ? 1 : 0;
    }
    let res = 0;
    // 水平切
    for (let x = i + 1; x < m; x++) {
      if (s[x][n] - s[x][j] - s[i][n] + s[i][j] > 0) {
        res = (res + dfs(x, j, k - 1)) % MOD;
      }
    }
    // 竖值切
    for (let y = j + 1; y < n; y++) {
      if (s[m][y] - s[m][j] - s[i][y] + s[i][j] > 0) {
        res = (res + dfs(i, y, k - 1)) % MOD;
      }
    }
    dp[i][j][k] = res;
    return res;
  }

  return dfs(0, 0, k - 1);
};
// @lc code=end
