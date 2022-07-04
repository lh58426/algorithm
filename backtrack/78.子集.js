/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let ret = [];
  let path = [];
  function backtrack(i = 0) {
    ret.push([...path]);
    for (let j = i; j < nums.length; j++) {
      path.push(nums[j]);
      backtrack(j + 1);
      path.pop();
    }
  }
  backtrack();
  return ret;
};
// @lc code=end
