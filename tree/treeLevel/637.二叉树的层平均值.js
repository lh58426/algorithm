/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
  let result = [];
  if (root === null) return result;
  let stack = [root];
  while (stack.length) {
    let len = stack.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      let node = stack.shift();
      sum += node.val;
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
    result.push(sum / len);
  }
  return result;
};
// @lc code=end
