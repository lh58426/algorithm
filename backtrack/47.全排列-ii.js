/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort();
  let ret = [];
  let path = [];
  function backtrack(used) {
    if (path.length === nums.length) {
      ret.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1] && !used[i - 1]) {
        // 重复数字重新排列，后面的比前面先枚举到，此时当前排列应已在结果中出现过，所以跳过
        continue;
      }
      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        backtrack(used);
        path.pop();
        used[i] = false;
      }
    }
  }
  backtrack([]);
  return ret;
};
// @lc code=end
