/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;
  const dp = new Array(len1 + 1)
    .fill(0)
    .map((item) => new Array(len2 + 1).fill(0));
  for (let i = 1; i <= len1; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= len2; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i][j - 1] + 1,
          dp[i - 1][j] + 1,
          // 两个都要删除
          dp[i - 1][j - 1] + 2
        );
      }
    }
  }
  return dp[len1][len2];
};
// @lc code=end
