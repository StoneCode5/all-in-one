/**
 * 239. 滑动窗口最大值
 * https://leetcode.cn/problems/sliding-window-maximum/
 */

function maxSlidingWindow(nums: number[], k: number): number[] {
  let i = 0,
    j = i + k - 1;
  const ret = [];
  while (j < nums.length) {
    let max = null;
    // for循环找到最大值
    for (let l=i; l < j; l++) {
      if (typeof nums[l] !== "number") {
        max = nums[l];
      } else if (nums[l] > max) {
        max = nums[l];
      }
    }
    ret.push(max);
    i++;
    j++;
  }
  return ret;
}

/**
 * 自己看到题目的第一想法
 *     暴力解法 时间复杂度为O（n * k）
 * 看完代码随想录之后的想法 
 *    
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  
 **/


/**
 * 347. 前 K 个高频元素
 * https://leetcode.cn/problems/top-k-frequent-elements/
 */

function topKFrequent(nums: number[], k: number): number[] {

};



/**
 * 自己看到题目的第一想法
 *     用哈希表存key与计数，然后转成数组，排序，取前K的值就行
 * 看完代码随想录之后的想法 
 *    
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  
 **/

