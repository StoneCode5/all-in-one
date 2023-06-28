/**
 * 704 二分查找
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let loop = true;
  let ret = -1;
  let i = 0;
  while (loop) {
    const split = Math.floor((end - start) / 2) + start;
    console.log("split", split);
    if (nums[start] === target) {
      ret = start;
      loop = false;
    } else if (nums[split] === target) {
      ret = split;
      loop = false;
    } else if (nums[end] === target) {
      ret = end;
      loop = false;
    } else if (start === end || start === split || end === split) {
      loop = false;
    } else if (nums[start] < target && nums[split] > target) {
      end = split;
    } else {
      start = split;
    }
    i += 1;
    if (i > 10) {
      loop = false;
    }
  }
  return ret;
};

var search2 = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let ret = -1;
  while (start <= end) {
    const milddle = Math.floor((end - start) / 2) + start;
    console.log('milddle', milddle);
    if (nums[milddle] > target) {
      end = milddle - 1;
    } else if (nums[milddle] < target) {
      start = milddle + 1;
    } else {
      return milddle;
    }
  }
  return ret;
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = -3;
const index = search2(nums, target);
console.log("index", index);


/**
 * 自己看到题目的第一想法
 *     利用while循环，不断二分，改变循环条件，直到找到
● 看完代码随想录之后的想法 
    左闭右闭的写法，精髓就在对比二分出来中间那个数字，同时结束循环的条件一定要有等号，因为二分到最后会是一个单一值
● 自己实现过程中遇到哪些困难 
    没有把边界情况考虑清楚
● 今日收获，记录一下自己的学习时长
    wihle中可以直接return函数
    花费时间： 2.5小时  有点长了
 */


/**
 * 27.移除元素
 */

/**
* @param {number[]} nums
* @param {number} val
* @return {number}
*/
var removeElement = function (nums, val) {
  let ret = nums.length
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === val) {
      nums.splice(i, 0)
      i -= 1
      ret -= 1
    }
  }
  return ret
};

var removeElement1 = function (nums, val) {
  let length = nums.length
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === val) {
      for (let j = i; j < length - 1; j++) {
        nums[j] = nums[j + 1]

      }
      length -= 1
    }
  }
};

const removeElement2 = (nums: number[], target: number) => {
  let slowIndex = 0
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== target) {
      nums[slowIndex] = nums[fastIndex]
      slowIndex += 1
    }
  }
  return slowIndex
}


/**
 * 自己看到题目的第一想法
 *     利用splice来删除元素
● 看完代码随想录之后的想法 
    数组是连续的，不能单独删除，只能覆盖
● 自己实现过程中遇到哪些困难 
    
● 今日收获，记录一下自己的学习时长
    掌握了双指针的方法，以及2次循环的方法
    花费时间： 1.5小时  有点长了
 */