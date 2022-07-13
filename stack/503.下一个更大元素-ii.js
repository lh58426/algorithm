/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let n = nums.length;
  let res = new Array(n).fill(-1);
  let stack = [];
  // 循环数组可以看做 [...nums, ...nums]
  for (let i = 0; i < 2 * n; i++) {
    let num = nums[i % n];
    while (stack.length && num > nums[stack[stack.length - 1]]) {
      res[stack.pop()] = num;
    }
    stack.push(i % n);
  }
  return res;
};
// @lc code=end
