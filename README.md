# algorithm

## tree

- 654 如何优化？
- 搜索提示原理？

## backtracking

- **37. 解数独**

## greedy(贪心)

- 621 如何优化？

## dynamic programming(动态规划)

- 不同路径（有无障碍）
  - 62.不同路径
  - 63.不同路径-ii
- 爬楼梯
- 分硬币
  - 322.零钱兑换
  - 518.零钱兑换-ii
- 打家劫舍（有无环）
  - 198.打家劫舍
  - 213.打家劫舍-ii
  - 337.打家劫舍-iii
- 买卖股票
  - 121.买卖股票的最佳时机
  - 122.买卖股票的最佳时机-ii
  - 123.买卖股票的最佳时机-iii
  - 309.最佳买卖股票时机含冷冻期
  - 714.买卖股票的最佳时机含手续费
- 子序
  - 53.最大子序和
  - 674.最长连续递增序列
- 字符串
  - 72.编辑距离

    **虚拟DOM问题**：Course 71.

  - **115.不同的子序列**

    dp 初始化？ Course 69.

  - 392.判断子序列
  - 583.两个字符串的删除操作
  - 1143.最长公共子序列

## interview

- ByteDance
  - 1472.设计浏览器历史记录
  - 剑指 Offer II 045. 二叉树最底层最左边的值
  - 异步任务并发数控制 limit
- Alibaba
  - 933.最近的请求次数
- Tecent
  - **148.排序链表**
    - 自顶而下归并
    - 自下而上归并
    - 快排？
    - 转换为数组排序
  - 217.存在重复元素
  - 341.扁平化数组
- Baidu
  - 23.合并k个升序链表
- NetEase
  - 384.打乱数组(如何打乱？)
- MeiTuan
  - 380.o-1-时间插入、删除和获取随机元素  
- DiDi
  - 1797.设计一个验证系统
- Others
  - 2.两数相加
  - 18.四数之和

## 滑动窗口模式

判断使用滑动窗口的时机：

- 问题的输入是一种线性数据结构，比如链表、数组或字符串
- 被要求查找最长/最短的子字符串、子数组或所需的值

### 大小为 K 的子数组的最大和（简单）

### 带有 K 个不同字符的最长子字符串（中等）

### 寻找字符相同但排序不一样的字符串（困难）

## 双指针

判断使用双指针的时机：

- 可用于处理排序数组（或链接列表）并需要查找满足某些约束的一组元素的问题
- 数组中的元素集是配对、三元组甚至子数组

### 求一个排序数组的平方（简单）

### 求总和为零的三元组（中等）

### 比较包含回退（backspace）的字符串（中等）

## 快慢指针

判断使用快慢指针的时机：

- 处理链表或数组中的循环的问题
- 需要知道特定元素的位置或链表的总长度

### 链表循环（简单）

### 回文链表（中等）

### 环形数组中的循环（困难）

## 合并区间

判断使用合并区间的时机：

- 得到一个仅含互斥区间的列表
- 「重叠区间（overlapping intervals）」

### 区间交叉（中等）

### 最大 CPU 负载（困难）

## 循环排序

判断使用循环排序的时机：

- 涉及数值在给定范围内的排序数组的问题
- 在一个排序/旋转的数组中找到缺失值/重复值/最小值

### 找到缺失值（简单）

### 找到最小的缺失的正数值（中等）

## 原地反转链表

### 反转一个子列表（中等）

### 反转每个 K 个元素的子列表（中等）

## BFS

### 二叉树层级顺序遍历（简单）

### 之字型遍历（Zigzag Traversal）（中等）

## DFS

### 路径数量之和（中等）

### 一个和的所有路径（中等）

## Two Heaps

判断使用 Two Heaps 的时机：

- 在优先级队列、调度等场景中有用
- 需要找到一个集合的最小/最大/中间元素
- 可用于具有二叉树数据结构的问题

### 查找一个数值流的中间值（中等）

## 子集

如何识别子集模式：

- 找到给定集合的组合或排列的问题

### 带有重复项的子集（简单）

### 通过改变大小写的字符串排列（中等）

## 二叉搜索

给定了排序数组、链表或矩阵，并要求寻找一个特定元素，可以使用的最佳算法就是二叉搜索。

### 在经过排序的无限数组中搜索（中等）

## 前 K 个元素

跟踪 K 个元素的最佳的数据结构是 Heap。

### 最常出现的 K 个数（中等）

## K 路合并

### 合并 K 个排序的列表（中等）

### 找到和最大的 K 个配对（困难）

## 拓扑排序

拓扑排序可用于寻找互相依赖的元素的线性顺序。

如何识别拓扑排序模式：

- 处理无向有环图的问题
- 以排序顺序更新所有对象
- 有一类遵循特定顺序的对象

### 任务调度（中等）

### 一个树的最小高度
