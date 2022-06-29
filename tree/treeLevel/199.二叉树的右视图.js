/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
// each level rightest val
var rightSideView = function (root) {
  let result = [];
  if (root === null) return result;
  let stack = [root];
  while (stack.length) {
    let len = stack.length;
    while (len--) {
      let node = stack.shift();
      if (len === 0) result.push(node.val);
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
  }
  return result;
};
// @lc code=end
