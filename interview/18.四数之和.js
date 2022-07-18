/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let res = [];
  let path = [];
  function dfs(index, count, target) {
    if (count === 0 && target === 0) {
      res.push([...path]);
      return;
    }
    if (len - index < count) return;
    if (target < count * nums[index]) return;
    if (target > count * nums[len - 1]) return;
    for (let i = index; i < len; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      dfs(i + 1, count - 1, target - nums[i]);
      path.pop();
    }
  }
  dfs(0, 4, target);
  return res;
};
// @lc code=end
