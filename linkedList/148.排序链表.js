/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function (head) {
  // 自顶而下归并
  // 空间复杂度：O(logn)，主要取决于递归调用的栈空间
  if (!head || !head.next) return head;
  let slow = head,
    fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let tmp = slow.next;
  slow.next = null;
  let left = sortList(head);
  let right = sortList(tmp);
  return mergeList(left, right);
  // 自下而上归并
  /*
  if (!head) {
    return head;
  }
  let length = 0;
  let node = head;
  while (node) {
    length++;
    node = node.next;
  }

  const dummyHead = new ListNode(0, head);
  for (let curlength = 1; curlength < length; curlength <<= 1) {
    let pre = dummyHead;
    let cur = dummyHead.next;
    while (cur != null) {
      let head1 = cur;
      for (let i = 1; i < curlength && cur.next; i++) {
        cur = cur.next;
      }
      let head2 = cur.next;
      // 截断子链表
      cur.next = null;
      cur = head2;
      for (let i = 1; i < curlength && cur && cur.next; i++) {
        cur = cur.next;
      }
      let next = null;
      // 截断子链表
      if (cur) {
        next = cur.next;
        cur.next = null;
      }
      let merged = mergeList(head1, head2);
      pre.next = merged;
      while (pre.next) {
        pre = pre.next;
      }
      cur = next;
    }
  }
  return dummyHead.next;
  */
  // 转换为数组排序
  /*
  if (!head) return head;
  let arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  arr.sort((a, b) => a.val - b.val);
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1];
  }
  arr[arr.length - 1].next = null;
  return arr[0];
  */
};

function mergeList(left, right) {
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
