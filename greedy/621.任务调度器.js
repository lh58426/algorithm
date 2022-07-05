/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // 统计每个字母出现的次数
  let arr = new Array(26).fill(0);
  for (let t of tasks) {
    arr[t.charCodeAt() - "A".charCodeAt()]++;
  }
  let max = Math.max(...arr);
  let ret = (max - 1) * (n + 1);
  for (let i = 0; i < 26; i++) {
    // 出现次数等于最大值时，后面补上最后一次
    if (arr[i] === max) {
      ret++;
    }
  }
  return Math.max(ret, tasks.length);
};
// @lc code=end
