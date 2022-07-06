/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
 * @return {number}
 */
var rob = function (root) {
  function dfs(node) {
    if (!node) {
      return [0, 0];
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    const robCurrent = node.val + left[1] + right[1];
    const notRob = Math.max(...left) + Math.max(...right);
    return [robCurrent, notRob];
  }
  return Math.max(...dfs(root));
};
// @lc code=end
