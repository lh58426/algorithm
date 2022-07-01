/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(null, head);
  let tmp = dummy;
  for (let i = 0; i < left - 1; i++) {
    tmp = tmp.next;
  }
  // prev 始终是反转部分的头结点
  let prev = tmp.next;
  let cur = prev.next;
  let next;
  for (let j = 0; j < right - left; j++) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  tmp.next.next = cur;
  tmp.next = prev;
  return dummy.next;
};
// @lc code=end
