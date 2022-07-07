/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  /**
   * dp[i][j]  s 以 i 结尾的子序列中，出现的 t 中以 j 结尾的字符串的个数
   * s[i - 1] === t[j - 1] 时用 [i - 1] 结尾的子序列匹配 [j - 1] 结尾的字符串 或者 [j] 结尾的字符串
   * s[i - 1] !== t[j - 1] 时用 [i - 1] 结尾的子序列匹配 [j] 结尾的字符串
   */
  const len1 = s.length;
  const len2 = t.length;
  const dp = new Array(len1 + 1)
    .fill(0)
    .map((item) => new Array(len2 + 1).fill(0));

  for (let i = 0; i < len1; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[len1][len2];
};
// @lc code=end
