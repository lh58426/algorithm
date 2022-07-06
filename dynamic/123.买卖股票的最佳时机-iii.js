/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * dp[i][0] 不买也不卖
   * dp[i][1] 第i天买入股票的状态
   * dp[i][2] 卖出
   * dp[i][3] 第二次买入
   * dp[i][3] 第二次卖出
   */
  // dp 空间降维
  const dp = [0, -prices[0], 0, -prices[0], 0];
  for (let i = 1; i < prices.length; i++) {
    dp[1] = Math.max(dp[1], dp[0] - prices[i]);
    dp[2] = Math.max(dp[2], dp[1] + prices[i]);
    dp[3] = Math.max(dp[3], dp[2] - prices[i]);
    dp[4] = Math.max(dp[4], dp[3] + prices[i]);
  }
  return dp[4];
};
// @lc code=end
