/**
 * 已知每个服务启动都需要一定时间，且每个服务可能依赖其他的服务启动。
 * 现给定一个 n*n 的二维数组 arr，arr[i][i] 表示 i 服务启动需要的时间，arr[i][j] 表示 i 服务是否依赖 j 服务，如果为 1 表示依赖，0 表示不依赖。
 * 当服务依赖的服务彼此之间没有依赖关系时，这些服务可以并行启动。
 * 题目保证服务之间不存在循环依赖关系，求服务 k（1<=k<=n）启动需要的时间。
 */

let arr1 = [
  [1, 0, 0],
  [1, 2, 0],
  [0, 1, 3]
]
// 6

let arr2 = [
  [1, 0, 0, 0],
  [1, 2, 0, 0],
  [1, 1, 3, 0],
  [0, 0, 1, 4]
]
// 10

let arr3 = [
  [1, 0, 0, 0],
  [1, 2, 0, 0],
  [1, 0, 3, 0],
  [0, 1, 1, 4]
]
// 8

function calcLaunchTime(arr, k) {
  // 创建依赖关系图
  // id: 服务id
  // next: 下一个服务
  // cost: 服务的执行时间
  // in: 前置服务数
  // time: 服务开始时间
  let obj = {};
  arr.forEach((row, i) => {
    if (i + 1 > k) return;

    obj[i] = { id: i, next: new Set(), cost: row[i], in: 0, time: 0 };

    row.forEach((col, j) => {
      if (i !== j && col === 1) {
        // i 服务依赖 j，i > j
        obj[i].in++;
        obj[j].next.add(i);
      }
    })
  })

  let completes = [];

  while (true) {
    let ready = [];
    for (let i in obj) {
      // 没有前置服务，直接启动
      if (obj[i].in === 0) {
        ready.push(obj[i]);
      }
    }

    if (ready.length == 0) {
      // 没有可以启动的服务
      break;
    }

    ready.forEach( task => {
      task.next.forEach( idx => {
        let nextTask = obj[idx];
        nextTask.in--;
        nextTask.time = Math.max(task.time + task.cost, nextTask.time);
      })

      // 删除已启动的服务，方便下轮遍历 obj 
      delete obj[task.id];
      completes.push(task);
    })
  }

  return Math.max(...completes.map(task => task.time + task.cost));

}

function dpCalcLaunchTime(arr, k) {
  const dp = new Array(k)
    .fill(0)
    .map( _ => new Array(k).fill(0));

  dp[0][0] = arr[0][0];

  for ( let i = 1; i < k; i++ ) {
    for ( let j = 0; j < k; j++ ) {
      if (arr[i][j] === 1 && j < i) {
        dp[i][j] = dp[j][j];
      }
      if ( j === i ) {
        dp[i][j] = arr[i][j] + Math.max(...dp[i].slice(0, j));
      }
    }
  }
  return dp[k - 1][k - 1];
}