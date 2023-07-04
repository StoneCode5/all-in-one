/**
 * 242. 有效的字母异位词
 */

function isAnagram(s: string, t: string): boolean {
    const map = {}
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map[char]) {
            map[char] += 1
        } else {
            map[char] = 1
        }
    }
    
    for (let j = 0; j < t.length; j++) {
        const char = t[j];
        if (map[char]) {
            map[char] -= 1
        } else {
            return false
        }
    }

    const keys = Object.keys(map)
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (map[key] !== 0) {
            return false
        }
    }
    return true

};

/**
 * 自己看到题目的第一想法
 *     用对象来记录出现次数，
 * 看完代码随想录之后的想法 
 *      手动使用数组来自定义哈希表，利用string的ascII码分别对应数组下标
 * 自己实现过程中遇到哪些困难
 *      
 * 今日收获，记录一下自己的学习时长
 *     0.5小时
 **/

/**
 * 349. 两个数组的交集
 */

function intersection(nums1: number[], nums2: number[]): number[] {

};

/**
 * 自己看到题目的第一想法
 *     
 * 看完代码随想录之后的想法 
 *      手动使用数组来自定义哈希表，利用string的ascII码分别对应数组下标
 * 自己实现过程中遇到哪些困难
 *      
 * 今日收获，记录一下自己的学习时长
 *     0.5小时
 **/

/**
 * 202. 快乐数
 */

function isHappy(n: number): boolean {
    let chars = String(n)
    let ret = 0
    while (chars.length !== 1) {
        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            ret += Number(char) * Number(char)
        }
        if (ret === 1) {
            return true
        }
    
        chars = String(ret)
    }
    return false
};

function isHappy1(n: number): boolean {
    let m = new Map()

    const getSum = (num) => {
        let sum = 0
        while (n) {
            sum += (n % 10) ** 2
            n = Math.floor(n / 10)
        }
        return sum
    }

    while (true) {
        // n出现过，证明已陷入无限循环
        if (m.has(n)) return false
        if (n === 1) return true
        m.set(n, 1)
        n = getSum(n)
    }
};

/**
 * 自己看到题目的第一想法
 *     采用数字与字符串互转的方式来计算求和
 * 看完代码随想录之后的想法 
 *      可以直接用数字的方式求和
 * 自己实现过程中遇到哪些困难
 *      循环中止条件想不到
 *      没有想看无线循环的情况
 * 今日收获，记录一下自己的学习时长
 *     0.5小时
 **/


/**
 * 1. 两数之和
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map(nums)
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const needNum = target - num
        const index = map.get(needNum)
        if (index) {
            return map.get(needNum)
        } 
        return 
    }
};