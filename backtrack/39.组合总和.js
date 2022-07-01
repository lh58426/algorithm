/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  let path = [];
  //candidates.sort();
  function backtrack(i, sum) {
    if (sum === target) {
      res.push([...path]);
      return;
    }
    for (let j = i; j < candidates.length; j++) {
      let num = candidates[j];
      if (num + sum > target) {
        continue;
      }
      path.push(num);
      sum += num;
      backtrack(j, sum);
      path.pop();
      sum -= num;
    }
  }
  backtrack(0, 0);
  return res;
};
// @lc code=end
