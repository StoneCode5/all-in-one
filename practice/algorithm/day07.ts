/**
 * 19. 删除链表的倒数第N个结点
 * 
 */

function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    const map = new Map<number,number>()
    let ret = 0
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            const sum = nums1[i] + nums2[j]
             if (map.get(sum)) {
                map.set(sum, map.get(sum)+1)
             }else {
                map.set(sum, 1)
             }
        }
    }
    for (let m = 0; m < nums3.length; m++) {
        for (let n = 0; n < nums4.length; n++) {
            const key = 0-(nums3[m] + nums4[n])
            if (map.get(key)) {
                ret += map.get(key)
            }
        }
    }
    return ret
};

function fourSumCount1(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let helperMap: Map<number, number> = new Map();
    let resNum: number = 0;
    let tempVal: number | undefined;
    for (let i of nums1) {
        for (let j of nums2) {
            tempVal = helperMap.get(i + j);
            helperMap.set(i + j, tempVal ? tempVal + 1 : 1);
        }
    }
    for (let k of nums3) {
        for (let l of nums4) {
            tempVal = helperMap.get(0 - (k + l));
            if (tempVal) {
                resNum += tempVal;
            }
        }
    }
    return resNum;
};

/**
 * 自己看到题目的第一想法
 *     没理解到意思，想着要找到其中的下标，其实不需要找下标
 * 看完代码随想录之后的想法 
 *      快速找到一个元素的方式 就可以考虑使用hash表
 * 自己实现过程中遇到哪些困难

 * 今日收获，记录一下自己的学习时长
 *  0.5h
 *  日常工作中可以多使用for of 来简化代码量
 *  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of
 **/


/**
 * 383. 赎金信
 * https://leetcode.cn/problems/ransom-note/
 */

function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = new Map<string, number>()
    for (let j = 0; j < magazine.length; j++) {
        const char = magazine[j];
        if (map.get(char)) {
            map.set(char, map.get(char)+1)
         }else {
            map.set(char, 1)
         }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const rChar = ransomNote[i]
        if (map.get(rChar)) {
            const _count = map.get(rChar)-1
            if (_count < 0) {
                return false
            }
            map.set(rChar, _count)
        } else {
            return false
        }
    }
    return true
};

/**
 * 自己看到题目的第一想法
 *     使用map
 * 看完代码随想录之后的想法 
 *      可以使用chatcode值来映射数组的下标
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  0.5h
 **/


/**
 * 15. 三数之和
 * https://leetcode.cn/problems/3sum/
 */

function threeSum(nums: number[]): number[][] {
    if (nums.length < 3) {
        return []
    }
    let ret = []
    const map = new Map<number, number[]>()
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i+1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    ret.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    return ret
};

var threeSum1 = function(nums) {
    const res = [], len = nums.length
    // 将数组排序
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {
        let l = i + 1, r = len - 1, iNum = nums[i]
        // 数组排过序，如果第一个数大于0直接返回res
        if (iNum > 0) return res
        // 去重
        if (iNum == nums[i - 1]) continue
        while(l < r) {
            let lNum = nums[l], rNum = nums[r], threeSum = iNum + lNum + rNum
            // 三数之和小于0，则左指针向右移动
            if (threeSum < 0) l++ 
            else if (threeSum > 0) r--
            else {
                res.push([iNum, lNum, rNum])
                // 去重
                while(l < r && nums[l] == nums[l + 1]){
                    l++
                }
                while(l < r && nums[r] == nums[r - 1]) {
                    r--
                }
                l++
                r--
            }
        }
    }
    return res
};


/**
 * 自己看到题目的第一想法
 *     三重循环再加赎金信可以实现
 * 看完代码随想录之后的想法 
 *    对数字进行排序是一个思路，善用双指标，同时要注意去重逻辑 
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  1h
 **/


/**
 * 第18题. 四数之和
 * https://leetcode.cn/problems/4sum/
 */

function fourSum(nums: number[], target: number): number[][] {
    const res = [], len = nums.length
    // 将数组排序
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len; i++) {
        let l1 = i + 1,
            l2 = i + 2,
            r = len - 1;

            if (nums[i] === nums[i - 1]) {
                continue
            }
            while (l1< l2 && l2 < r ) {
                const sum = nums[i] + nums[l1] + nums[l2] + nums[r] 
                if (sum > target) {
                    
                }
                while ( nums[i] + nums[l1] + nums[l2] + nums[r] > target){
                    r--
                    if (nums[r] === nums[r+1]) {
                        continue
                    }
                    if (nums[i] + nums[l1] + nums[l2] + nums[r] === target) {
                        res.push([nums[i], nums[l1], nums[l2], nums[r]])
                    }
                }
            }
        
    }
};


function fourSum1(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    let first: number = 0,
        second: number,
        third: number,
        fourth: number;
    let length: number = nums.length;
    let resArr: number[][] = [];
    for (; first < length; first++) {
        if (first > 0 && nums[first] === nums[first - 1]) {
            continue;
        }
        for (second = first + 1; second < length; second++) {
            if ((second - first) > 1 && nums[second] === nums[second - 1]) {
                continue;
            }
            third = second + 1;
            fourth = length - 1;
            while (third < fourth) {
                let total: number = nums[first] + nums[second] + nums[third] + nums[fourth];
                if (total === target) {
                    resArr.push([nums[first], nums[second], nums[third], nums[fourth]]);
                    third++;
                    fourth--;
                    while (nums[third] === nums[third - 1]) third++;
                    while (nums[fourth] === nums[fourth + 1]) fourth--;
                } else if (total < target) {
                    third++;
                } else {
                    fourth--;
                }
            }
        }
    }
    return resArr;
};

/**
 * 自己看到题目的第一想法
 *     采用三个指针，有点写不出来
 * 看完代码随想录之后的想法 
 *     在三数之和的基础上，再加一层循环，但要注意减枝和去重的条件
 *      target可以为负数，不想三数之和为0那么简单
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  1h
 *  
 **/
