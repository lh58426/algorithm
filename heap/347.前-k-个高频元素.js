/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * 二叉堆
 */
class Heap {
  constructor(comparer) {
    // 忽略 0 索引，方便计算
    this.arr = [0];
    // 大（小）顶堆 比较函数
    this.comparer = comparer || ((a, b) => a > b);
  }

  get size() {
    return this.arr.length - 1;
  }

  /**
   * 获取堆顶元素
   * @returns
   */
  peek() {
    return this.arr[1];
  }

  left(k) {
    return k * 2;
  }

  right(k) {
    return k * 2 + 1;
  }

  parent(k) {
    return Math.floor(k / 2);
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
    while (k > 1 && comparer(arr[k], arr[parent(k)])) {
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
    while (left(k) <= size) {
      // 元素和左右子元素比较
      let child = left(k);
      if (right(k) <= size && comparer(arr[right(k)], arr[child])) {
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
    if (this.arr.length == 1) return null;
    // 堆顶元素和最后一个元素交换，然后弹出
    this.swap(1, this.arr.length - 1);
    let top = this.arr.pop();
    this.sinkDown(1);
    return top;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};
  nums.map((num) => {
    if (num in map) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  });

  // 维护一个大小 K 的小顶堆
  let heap = new Heap((a, b) => map[a] < map[b]);
  Object.keys(map).forEach((n, i) => {
    if (i < k) {
      heap.push(n);
    } else if (map[heap.peek()] < map[n]) {
      heap.arr[1] = n;
      heap.sinkDown(1);
    }
  });
  return heap.arr.slice(1);
};
// @lc code=end
