/*
 * @lc app=leetcode.cn id=1723 lang=javascript
 *
 * [1723] 完成所有工作的最短时间
 */

// @lc code=start
/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
/*
var minimumTimeRequired = function (jobs, k) {
  // 工人已分配工作时间
  const cnt = new Array(k).fill(0);
  const n = jobs.length;
  // 倒序，优先分配工作量大的工作
  jobs.sort((a, b) => b - a);
  let res = Infinity;
  backtrack(0);
  return res;

  function backtrack(i) {
    // 结束条件，工作分配结束
    if (i === n) {
      let max = Math.max(...cnt);
      res = Math.min(res, max);
      return;
    }

    // 做出选择
    for (let j = 0; j < k; j++) {
      // 不满足条件，剪枝
      if (cnt[j] + jobs[i] >= res) {
        // 跳出本次循环
        continue;
      }
      cnt[j] += jobs[i];
      backtrack(i + 1);
      cnt[j] -= jobs[i];
      // 如果当前工人 j 未被分配工作，那么下一个工人 j + 1 也必然未被分配工作
      // 那么将工作先分配给任何一个人都没有区别
      if (cnt[j] === 0) {
        break;
      }
    }
  }
};
*/
var minimumTimeRequired = function (jobs, k) {
  const n = jobs.length;
  jobs.sort((a, b) => b - a);
  let l = jobs[0],
    r = jobs.reduce((prev, cur) => prev + cur, 0);

  // 二分法找出最小的最大工作时间
  while (l < r) {
    let mid = Math.floor((l + r) >> 1);
    if (check(mid)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;

  function check(limit) {
    const cnt = new Array(k).fill(0);
    return backtrack(0, cnt, limit);
  }

  function backtrack(i, cnt, limit) {
    // 结束条件，工作分配结束
    if (i === n) return true;
    let cur = jobs[i];
    for (let j = 0; j < k; j++) {
      if (cnt[j] + cur <= limit) {
        cnt[j] += cur;
        if (backtrack(i + 1, cnt, limit)) return true;
        cnt[j] -= cur;
      }
      /**
       * 如果工人 i 分活失败（给他分配这个任务后所有的尝试都是失败的），则剪枝，
       * 因为也没必要再往后试了，其他人也会出现一样的情况 
       * */ 
      if (cnt[j] === 0) {
        break;
      }
    }
    return false;
  }
};
// @lc code=end
