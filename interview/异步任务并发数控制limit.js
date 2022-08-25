function limit(maxCount) {
  // 异步函数队列
  let queue = [];
  let activeCount = 0;

  const next = () => {
    activeCount--;
    if (queue.length > 0) {
      queue.shift()();
    }
  };

  const run = async (fn, resolve, args) => {
    activeCount++;
    // fn 可能非异步，用 async 包一下
    const result = (async () => fn(...args))();
    resolve(result);
    await result;
    next();
  };

  const push = async (fn, resolve, args) => {
    queue.push(run.bind(null, fn, resolve, args));
    if (activeCount < maxCount && queue.length > 0) {
      queue.shift()();
    }
  };

  let runner = (fn, ...args) => {
    return new Promise((resolve) => {
      push(fn, resolve, args);
    });
  };

  return runner;
}

async function sleep(seconds, name = "test") {
  return new Promise((resolve) => {
    console.log(seconds, name, "start");
    setTimeout(() => {
      console.log(seconds, name, "end");
      resolve({ seconds, name });
    }, seconds * 1000);
  });
}

async function start() {
  let runner = limit(3);
  let tasks = [
    () => sleep(1, "吃饭"),
    () => sleep(3, "睡觉"),
    () => sleep(5, "打游戏"),
    () => sleep(3.5, "学习算法"),
    () => sleep(4, "学习Vue和React"),
  ].map(runner);
  let result = await Promise.all(tasks);
  console.log(result, "end");
}

start();

// 如果任务有优先级呢