/*
 * @lc app=leetcode.cn id=1575 lang=javascript
 *
 * [1575] 统计所有可行路径
 */

// @lc code=start
/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
const MOD = 10 ** 9 + 7;

var countRoutes = function (locations, start, finish, fuel) {
  const n = locations.length;
  const f = new Array(n + 1).fill(0).map(() => new Array(fuel + 1).fill(-1));

  function dfs(i, t) {
    if (f[i][t] != -1) return f[i][t];
    // i 到 finish 需要消耗的汽油量超过剩余汽油量
    if (Math.abs(locations[i] - locations[finish]) > t) return 0;
    //
    let res = i === finish ? 1 : 0;
    for (let j = 0; j < n; j++) {
      if (j != i) {
        let cost = Math.abs(locations[i] - locations[j]);
        if (cost <= t) {
          res = (res + dfs(j, t - cost)) % MOD;
        }
      }
    }
    f[i][t] = res;
    return res;
  }

  return dfs(start, fuel);
};
// @lc code=end
