/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  /*
  let notHas = 0,
    has = -prices[0];
  for (let i = 1; i < n; i++) {
    notHas = Math.max(notHas, has + prices[i]);
    has = Math.max(has, notHas - prices[i]);
  }
  return notHas;
  */
  let res = 0;
  for (let i = 1; i < n; i++) {
    res += Math.max(0, prices[i] - prices[i - 1]);
  }
  return res;
};
// @lc code=end
