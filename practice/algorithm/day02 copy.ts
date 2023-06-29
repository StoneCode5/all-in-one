function minSubArrayLen(target: number, nums: number[]): number {
  let ret = 0,
    left = 0,
    right = 0;

  const getSum = (left, right, nums) => {
    if (right === left) {
      return nums[left];
    }
    let ret = 0;
    while (right >= left) {
      ret = ret + nums[left]
      left += 1;
    }
    return ret;
  };

  while (right < nums.length && left < nums.length) {
    const sum = getSum(left, right, nums);
    if (sum >= target) {
      ret = ret > 0 ? Math.min(right - left + 1, ret) : right -left + 1
      if (left < nums.length) {
        left += 1;
      }
    } else {
      if (right < nums.length) {
        right += 1;
      }
    }
  }
  return ret;
}
minSubArrayLen(7, [2,3,1,2,4,3])

/**
 * 自己看到题目的第一想法
 *     
● 看完代码随想录之后的想法 
    求和新姿势，不光可以加，还可以减!
● 自己实现过程中遇到哪些困难 
    求和用了循环，时间复杂度应该不是O（n）
● 今日收获，记录一下自己的学习时长
    1.2小时 自己方法调试时间较长 其实应该避免
 */

function generateMatrix(n: number): number[][] {

};

//[[1,2,3],[8,9,4],[7,6,5]]
generateMatrix(3)