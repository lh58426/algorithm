/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
var TrieNode = function () {
  this.next = new Map();
  this.end = false;
};

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let ch of word) {
    let { next } = node;
    let trieNode = next.get(ch);
    if (!trieNode) {
      trieNode = new TrieNode();
      next.set(ch, trieNode);
    }
    node = trieNode;
  }
  node.end = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let ret = this.startsWith(word);
  return ret && ret.end;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (let ch of prefix) {
    let { next } = node;
    let trieNode = next.get(ch);
    if (!trieNode) {
      return false;
    }
    node = trieNode;
  }
  return node;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
