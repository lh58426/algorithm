/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length == 0) return null;
  return mergeLists(lists, 0, lists.length - 1);
};

function mergeLists(lists, start, end) {
  if (start == end) {
    return lists[start];
  }
  let mid = start + ((end - start) >> 1);
  return mergeTwoLists(
    mergeLists(lists, start, mid),
    mergeLists(lists, mid + 1, end)
  );
}

function mergeTwoLists(left, right) {
  let dummyHead = new ListNode(0, null);
  let node = dummyHead;
  while (left && right) {
    if (left.val < right.val) {
      node.next = left;
      left = left.next;
    } else {
      node.next = right;
      right = right.next;
    }
    node = node.next;
  }
  node.next = left != null ? left : right;
  return dummyHead.next;
}
// @lc code=end
