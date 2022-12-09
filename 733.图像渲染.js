/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const m = image.length;
  const n = image[0].length;
  const target = image[sr][sc];
  const dfs = (i, j) => {
    if (
      i < 0 ||
      i == m ||
      j < 0 ||
      j == n ||
      image[i][j] != target ||
      image[i][j] == color
    ) {
      return;
    }
    image[i][j] = color;
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };
  dfs(sr, sc);
  return image;
};
// @lc code=end
