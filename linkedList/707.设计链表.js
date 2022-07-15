/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
var LinkedNode = function (val, next = null) {
  this.val = val;
  this.next = next;
};

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
 * @param {number} index index 从 0 开始
 * @return {LinkedNode}
 */
MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.size) {
    return null;
  }
  let node = new ListNode(0, this.head);
  while (index-- >= 0) {
    node = node.next;
  }
  return node;
};

/**
 * @param {number} index index 从 0 开始
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let node = this.getNode(index);
  return node ? node.val : -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let node = new LinkedNode(val, this.head);
  this.head = node;
  this.size++;
  if (!this.tail) {
    this.tail = node;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let node = new ListNode(val);
  if (this.tail) {
    this.tail.next = node;
  }
  this.tail = node;
  this.size++;
  if (!this.head) {
    this.head = node;
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return;
  if (index <= 0) {
    this.addAtHead(val);
    return;
  }
  if (index == this.size) {
    this.addAtTail(val);
    return;
  }
  // 获取第 index - 1 个节点
  let node = this.getNode(index - 1);
  node.next = new LinkedNode(val, node.next);
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }
  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    if(this.size === 0) {
      this.tail = null;
    }
    return;
  }
  let node = this.getNode(index - 1);
  node.next = node.next.next;
  if (index === this.size - 1) {
    this.tail = node;
  }
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
