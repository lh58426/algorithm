/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];
  if (root === null) return result;
  let stack = [root];
  while (stack.length) {
    let len = stack.length;
    let curLevel = [];
    while (len--) {
      let node = stack.shift();
      curLevel.push(node.val);
      node.children.forEach(function (child) {
        child && stack.push(child);
      });
    }
    result.push(curLevel);
  }
  return result;
};
// @lc code=end
