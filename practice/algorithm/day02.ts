/**
 * 977. 有序数组的平方
 * https://leetcode.cn/problems/squares-of-a-sorted-array/
 * 
 * 输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]


 */


const solution = (nums: number[]) => {
    const ret: number[] = []
    for (let i = 0, j = nums.length - 1; i <= j;) {
        const jj = nums[j] * nums[j]
        const ii = nums[i] * nums[i]
        if (ii >= jj) {
            ret.unshift(ii)
            i++
        } else {
            ret.unshift(jj)
            j--
        }
    }
    return ret
}


/**
 * 自己看到题目的第一想法
 *     
● 看完代码随想录之后的想法 
    题目给的有序，双指针很好的使用到了，就直接避开了排序
● 自己实现过程中遇到哪些困难 
    O(n)的排序实现
● 今日收获，记录一下自己的学习时长
   总花费35分钟，不错
 */



// 209.长度最小的子数组

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
            ret = ret > 0 ? Math.min(right - left + 1, ret) : right - left + 1
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

// minSubArrayLen(7, [2, 3, 1, 2, 4, 3])

function minSubArrayLen1(target: number, nums: number[]):number {
    let ret = 9999999
    let sum = 0
    let i = 0
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j]
        while (sum >= target) {
            ret = Math.min(j - i + 1, ret) 
            sum -= nums[i]
            i++
        }
    }
    return ret === 9999999 ? 0 : ret
}


/**
 * 自己看到题目的第一想法
 *     以前有看过滑动窗口的题，双指针的思路没问题，但求和的思路没打开
● 看完代码随想录之后的想法 
    求和新姿势，不光可以加，还可以减!
● 自己实现过程中遇到哪些困难 
    求和用了循环，时间复杂度应该不是O（n）
● 今日收获，记录一下自己的学习时长
    1.2小时 自己方法调试时间较长 其实应该避免
 */


// 59.螺旋矩阵II


function generateMatrix(n: number): number[][] {
    let loopNum  = Math.floor( n / 2 )
    let mid = Math.floor( n / 2 )
    let row = 0
    let col = 0
    let count = 1
    let offset = 1
    const result = []
    for (let i = 0; i < n; i++) {
        result.push(new Array(n))
    }
    while (loopNum > 0) {
        while (col <= n - 1 - offset) {
            result[row][col] = count++
            col++
        }

        while (row <= n - 1 - offset) {
            result[row][col] = count++
            row++
        }
        while (col >= offset ) {
            result[row][col]= count++
            col--
        }
        while (row >= offset) {
            result[row][col] = count++
            row--
        }
        offset++
        col++
        row++
        loopNum--
    }
    if (n % 2 === 1) {
        result[mid][mid] = n *n
    }
    return result

};

generateMatrix(3)

/**
 * 自己看到题目的第一想法
 *     没写过类似的，没有思路
● 看完代码随想录之后的想法 
    循环不变量 是关键 
● 自己实现过程中遇到哪些困难 
    - 
● 今日收获，记录一下自己的学习时长
    1.5小时 
 */