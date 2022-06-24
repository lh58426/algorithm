/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 *    a    b
 * ------ ---*---
         |       |
          -------
             c
  a = (n - 1)(b + c) + c           
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    // 第一次相遇
    if (slow === fast) {
      // 从起点开始直至第二次相遇
      let cur = head;
      while (cur !== slow) {
        cur = cur.next;
        slow = slow.next;
      }
      return cur;
    }
  }
  return null;
};
// @lc code=end
