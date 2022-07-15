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
var findBottomLeftValue = function (root) {
  let result = null;
  if (root === null) return result;
  let stack = [root];
  while (stack.length) {
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      let node = stack.shift();
      if (i === 0) result = node.val;
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
  }
  return result;
};
