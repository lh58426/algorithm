/*
 * @lc app=leetcode.cn id=1797 lang=javascript
 *
 * [1797] 设计一个验证系统
 */

// @lc code=start
/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function (timeToLive) {
  this.timeToLive = timeToLive;
  this.manager = {};
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
  this.manager[tokenId] = currentTime;
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
  if (tokenId in this.manager) {
    let time = this.manager[tokenId];
    if (time + this.timeToLive > currentTime) {
      this.manager[tokenId] = currentTime;
    }
  }
};

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
  return Object.values(this.manager).filter(
    (time) => time > currentTime - this.timeToLive
  ).length;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
// @lc code=end
