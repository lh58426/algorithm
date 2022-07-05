/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let curIdx = 0;
  let nextIdx = 0;
  let steps = 0;
  for(let i = 0; i < nums.length - 1; i++) {
    nextIdx = Math.max(nextIdx, i + nums[i]);
    if(i === curIdx) {
      curIdx = nextIdx;
      steps++;
    }
  }
  return steps;
};
// @lc code=end

