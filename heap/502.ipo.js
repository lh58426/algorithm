/*
 * @lc app=leetcode.cn id=502 lang=javascript
 *
 * [502] IPO
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
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  // arr [成本，纯利润]
  let arr = capital.map((c, i) => [c, profits[i]]);
  arr.sort((a, b) => a[0] - b[0]);
  let heap = new Heap((a, b) => a > b);
  let cur = 0;
  while (k > 0) {
    // 当前资本能覆盖成本的项目都放入大顶堆
    while (cur < arr.length && arr[cur][0] <= w) {
      heap.push(arr[cur][1]);
      cur++;
    }
    if (heap.size > 0) {
      // 取纯利润最大的项目执行
      w += heap.pop();
    } else {
      // 跳出循环，返回w
      break;
    }
    k--;
  }
  return w;
};
// @lc code=end
