/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  if (len <= 1) return 0;
  // dp [持有股票，未持有股票]
  dp = [-prices[0], 0];
  for (let i = 1; i < len; i++) {
    // 前某一天买入，今天买入
    dp[0] = Math.max(dp[0], -prices[i]);
    // 前某一天卖出，今天卖出
    dp[1] = Math.max(dp[1], dp[0] + prices[i]);
  }
  return dp[1];
};
// @lc code=end
