/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  let result = [];
  if (root === null) return result;
  let stack = [root];
  while (stack.length) {
    let len = stack.length;
    let maxVal = stack[0].val;
    while (len--) {
      let node = stack.shift();
      maxVal = node.val > maxVal ? node.val : maxVal;
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
    result.push(maxVal);
  }
  return result;
};
// @lc code=end
