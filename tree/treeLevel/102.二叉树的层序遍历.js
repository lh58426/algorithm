/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];
  if (root === null) return result;
  let stack = [root];
  while (stack.length) {
    let len = stack.length;
    let curLevel = [];
    for (let i = 0; i < len; i++) {
      let node = stack.shift();
      curLevel.push(node.val);
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
    result.push(curLevel);
  }
  return result;
};
// @lc code=end
