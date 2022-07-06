/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  // dp [持股，不持股（当天没卖出），不持股（当天卖出）]
  const dp = [-prices[0], 0, 0];
  for (let i = 1; i < n; i++) {
    dp[0] = Math.max(dp[0], dp[1] - prices[i]);
    dp[1] = Math.max(dp[1], dp[2]);
    dp[2] = dp[0] + prices[i];
  }
  return Math.max(dp[1], dp[2]);
};
// @lc code=end
