/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */

let strategy = {
  "+": (a, b) => a + b,
  "-": (a, b) => b - a,
  "*": (a, b) => a * b,
  "/": (a, b) => (b / a) | 0,
};

var evalRPN = function (tokens) {
  let stack = [];
  //let tmp = "";
  for (let i = 0; i < tokens.length; i++) {
    let t = tokens[i];
    if (t in strategy) {
      stack.push(strategy[t](stack.pop(), stack.pop()));
    } else {
      stack.push(Number(t));
    }
    /*
    switch (t) {
      case "+":
        tmp = stack.pop();
        stack.push(stack.pop() + tmp);
        break;
      case "-":
        tmp = stack.pop();
        stack.push(stack.pop() - tmp);
        break;
      case "*":
        tmp = stack.pop();
        stack.push(stack.pop() * tmp);
        break;
      case "/":
        tmp = stack.pop();
        // Math.floor() 负数出错
        // 可以 num | 0 取整
        stack.push(Math.trunc(stack.pop() / tmp));
        break;
      default:
        stack.push(Number(t));
        break;
    }
    */
  }
  return stack.pop();
};
// @lc code=end
