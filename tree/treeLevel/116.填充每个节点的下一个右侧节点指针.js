/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return root;
  let stack = [root];
  while (stack.length) {
    let len = stack.length;
    while (len--) {
      let node = stack.shift();
      node.next = len > 0 ? stack[0] : null;
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
  }
  return root;
};
// @lc code=end
