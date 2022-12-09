/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  function search(x) {
    let left = 0, right = nums.length;
    while (left < right) {
      let mid = (left + right) >> 1;
      if (nums[mid] < x) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    // left 为第一个 >= target 的元素坐标, 终止条件 left = right
    // 该元素可能不存在，因此初始值 right = nums.length
    return left;
  }
  let l = search(target);
  let r = search(target + 1);
  return l === r ? [-1, -1] : [l, r - 1];
};
// @lc code=end

const nums = [5, 7, 7, 8, 8, 10],
  target = 8;
searchRange(nums, target);

/**
 * [5, 7, 7, 8, 8, 10] target: 8
 * left: 0, right: 6 
 * => mid: 3, left: 0, right: 3
 * => mid: 1, left: 2, right: 3 
 * => mid: 2, left: 3, right: 3
 * => return 3 
 * 
 * target: 9
 * left: 0, right: 6 
 * => mid: 3, left: 4, right: 6
 * => mid: 5, left: 4, right: 5 
 * => mid: 4, left: 5, right: 5
 * => return 5 
 * 
 * target: 11
 * left: 0, right: 6 
 * => mid: 3, left: 4, right: 6
 * => mid: 5, left: 6, right: 6 
 * => return 6 
 * */