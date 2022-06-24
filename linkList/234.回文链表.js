/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 前半截反转
  let slow = (fast = head);
  let prev = null;
  while (fast && fast.next) {
    fast = fast.next.next;
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  if (fast) {
    // 链表奇数个节点
    slow = slow.next;
  }
  // prev 是开始节点，slow 是中间节点
  while (prev && slow) {
    if (prev.val !== slow.val) {
      return false;
    }
    prev = prev.next;
    slow = slow.next;
  }
  return true;
};
// @lc code=end
