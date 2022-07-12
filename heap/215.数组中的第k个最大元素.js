/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start

/**
 * 二叉堆
 */
class Heap {
  constructor(comparer) {
    this.arr = [];
    // 大（小）顶堆 比较函数
    this.comparer = comparer || ((a, b) => a > b);
  }

  get size() {
    return this.arr.length;
  }

  /**
   * 获取堆顶元素
   * @returns
   */
  peek() {
    return this.arr[0];
  }

  left(k) {
    return k * 2 + 1;
  }

  right(k) {
    return k * 2 + 2;
  }

  parent(k) {
    return (k - 1) >> 1;
  }

  swap(i, j) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
  }

  /**
   * 上浮元素，维护堆结构
   * @param {*} k
   */
  shiftUp(k) {
    let { arr, comparer, parent } = this;
    while (k && comparer(arr[k], arr[parent(k)])) {
      this.swap(parent(k), k);
      k = parent(k);
    }
  }

  /**
   * 新增元素
   * @param {*} item
   */
  push(item) {
    this.arr.push(item);
    this.shiftUp(this.arr.length - 1);
  }

  /**
   * 下沉元素，维护堆结构
   * @param {*} k
   * @returns
   */
  sinkDown(k) {
    let { arr, comparer, size, left, right } = this;
    while (left(k) < size) {
      // 元素和左右子元素比较
      let child = left(k);
      if (right(k) < size && comparer(arr[right(k)], arr[child])) {
        child = right(k);
      }
      if (comparer(arr[k], arr[child])) {
        return;
      }
      this.swap(k, child);
      k = child; //继续向下
    }
  }

  /**
   * 弹出堆顶
   * @returns
   */
  pop() {
    if (this.arr.length == 0) return null;
    // 堆顶元素和最后一个元素交换，然后弹出
    this.swap(0, this.arr.length - 1);
    let top = this.arr.pop();
    this.sinkDown(0);
    return top;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let minHeap = new Heap((a, b) => a < b);
  for (let num of nums) {
    minHeap.push(num);
    if (minHeap.size > k) {
      minHeap.pop();
    }
  }
  return minHeap.peek();
};
// @lc code=end
