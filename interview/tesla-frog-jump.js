/**
 * 有 N 块积木，从 0 到 N-1，排成一排。 块号 J 和 K 之间的距离，当 J <= K 时，计算为 K - J + 1。
 * 一对青蛙坐在一块积木上，他们大吵了一架。现在它们想要跳离彼此，这样它们之间的距离就会尽可能大。
 * 青蛙只能跳起来，这意味着它们只能在两个木块相邻且第二个木块与第一个木块高度相同或更高的情况下才能从一个木块移动到另一个木块。
 * 如果它们一开始也选择坐在最理想的起始木块上，那么它们之间可能形成的最长距离是多少?
 */

// 给定一个由表示方块高度的整数组成的数组方块，返回两只青蛙从其中一个方块开始彼此之间可能的最长距离

function maxDistance(blocks) {
  // 以每个 blocks[i] 作为起点的最大距离
  let res = [];
  for (let i = 0; i < blocks.length; i++) {
    let j = k = i;
    for (j = i; j >= 0; j--) {
      if (j === 0 || blocks[j] > blocks[j - 1]) {
        break;
      }
    }
    for (k = i; k < blocks.length; k++) {
      if (k === blocks.length - 1 || blocks[k] > blocks[k + 1]) {
        break;
      }
    }
    res.push(k - j + 1);
  }
  return Math.max(...res);
}