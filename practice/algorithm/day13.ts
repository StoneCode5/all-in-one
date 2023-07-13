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
 *     采用单调队列的解法，时间复杂度为O（n）
 * 自己实现过程中遇到哪些困难
      单调队列的实现？
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
 *     用哈希表存key与计数，然后转成数组，排序，取前K的值就行  这个时间复杂度在O（n*log n）
 * 看完代码随想录之后的想法 
 *    排序这里有讲究，相当于只排前K个元素就好了，不需要排所有，所以可以将时间复杂度控制在O（n*log k）
 * 自己实现过程中遇到哪些困难
      
 * 今日收获，记录一下自己的学习时长
 *  上面这两个就是队列的经典应用场景，不使用队列也能做出来，采用队列的方式主要是以降低时间复杂度。
 *  也接触到了堆这个数据结构，采用大顶堆和小顶堆解决问题。
 **/

