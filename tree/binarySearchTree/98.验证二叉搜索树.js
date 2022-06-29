/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let prev = -Infinity;
  function traverse(node) {
    if (node === null) return true;
    let left = traverse(node.left);
    // 二叉搜索树中序遍历应该是递增的
    if (prev >= node.val) return false;
    prev = node.val;
    let right = traverse(node.right);
    return left && right;
  }
  return traverse(root);
};
// @lc code=end
