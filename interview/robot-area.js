/**
 * 绘图机器的绘图笔初始位置在原点 (0,0)，机器启动后按照以下规则来进行绘制直线
 * 1. 尝试沿着横线坐标正向绘制直线，直到给定的终点 E
 * 2. 期间可以通过指令在纵坐标轴方向进行偏移，offsetY 为正数表示正向偏移,为负数表示负向偏移
 * 给定的横坐标终点值 E 以及若干条绘制指令，请计算绘制的直线和横坐标轴以及x=E的直线组成的图形面积
 * 
 * 输入描述:
 * 首行为两个整数 N 和 E，表示有 N 条指令,机器运行的横坐标终点值 E
 * 接下来 N 行 每行两个整数表示一条绘制指令 x offsetY
 * 用例保证横坐标 x 以递增排序的方式出现，且不会出现相同横坐标 x
 * 取值范围: 0 < N <= 10000，0 <= x <= E <= 20000，-10000 <= offsetY <= 10000
 * 输出描述: 一个整数表示计算得到的面积 用例保证结果范围在 0 到 4294967295之内
 */

function calcArea(input) {
  const [[total, len], ...rest] = input
    .split('\n')
    .filter(v => v)
    .map(v => v.split(' ').map(v => parseInt(v)));

  let area = 0;
  let x = 0, y = 0;
  for (let i = 0; i < total; i++) {
    const [x1, offsetY] = rest[i];
    area += (x1 - x) * Math.abs(y);
    x = x1;
    y += offsetY;
  }
  return area + (len - x) * Math.abs(y);
}