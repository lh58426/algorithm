/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let notHas = 0,
    has = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    notHas = Math.max(notHas, has + prices[i] - fee);
    has = Math.max(has, notHas - prices[i]);
  }
  return notHas;
};
// @lc code=end
