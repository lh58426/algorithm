/**
 * S 型打印
 */

function printSMatrix(n, m) {

  let res = [];

  for (let i = 0; i < m; i++) {
    let arr = new Array(n).fill(0).map((v, k) => k + i * n + 1);
    res.push(i & 1 ? arr.reverse() : arr);
  }

  let str = "";
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      str += res[x][y] + '';
    }
    str += '\n';
  }

  console.log(str);

}