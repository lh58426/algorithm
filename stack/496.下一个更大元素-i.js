/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = {};
  let stack = [];
  /*
  for (let i = 0; i < nums2.length; i++) {
    let num = nums2[i];
    while (stack.length && num > stack[stack.length - 1]) {
      map[stack.pop()] = num;
    }
    stack.push(num);
    map[num] = -1;
  }
  */
  for (let i = nums2.length - 1; i >= 0; i--) {
    let num = nums2[i];
    while (stack.length && num >= stack[stack.length - 1]) {
      stack.pop();
    }
    map[num] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(num);
  }
  return nums1.map(num => map[num]);
};
// @lc code=end
