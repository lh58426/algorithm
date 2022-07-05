/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let queue = senate.split("");
  let stack = [];
  while (queue.length > 0) {
    let s = queue.shift();
    if (stack.length === 0 || stack[stack.length - 1] === s) {
      // 栈空或者没有被禁掉，则胜利入栈
      stack.push(s);
    } else {
      // 最近胜利的弹出栈进入队列
      queue.push(stack.pop());
    }
  }
  return stack.pop() === "R" ? "Radiant" : "Dire";
};
// @lc code=end
