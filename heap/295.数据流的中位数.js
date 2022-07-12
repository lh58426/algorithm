/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
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

var MedianFinder = function () {
  // 大顶堆 中位数 小顶堆
  this.maxHeap = new Heap((a, b) => a > b);
  this.minHeap = new Heap((a, b) => a < b);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (!this.maxHeap.size || num < this.maxHeap.peek()) {
    this.maxHeap.push(num);
  } else {
    this.minHeap.push(num);
  }
  // 维护两个堆的平衡
  if (this.maxHeap.size - this.minHeap.size > 1) {
    this.minHeap.push(this.maxHeap.pop());
  }
  if (this.minHeap.size > this.maxHeap.size) {
    this.maxHeap.push(this.minHeap.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if ((this.maxHeap.size + this.minHeap.size) % 2 === 0) {
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
  return this.maxHeap.peek();
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
