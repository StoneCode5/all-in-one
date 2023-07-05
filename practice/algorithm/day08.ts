/**
 * 344.反转字符串
 * https://leetcode.cn/problems/reverse-string/
 */


/**
 Do not return anything, modify s in-place instead.
 */
 function reverseString(s: string[]): void {
    let j = s.length - 1
    let i = 0
    while (j > i) {
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
        j--
        i++
    }
 };


/**
 * 自己看到题目的第一想法
 *     直接双指针，用临时变量来存储，不断替换
 * 看完代码随想录之后的想法 
 *     刷题过程中 库函数的使用
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  
 **/


/**
 * 344.反转字符串 II
 * https://leetcode.cn/problems/reverse-string-ii/
 */


function reverseStr(s: string, k: number): string {
    function reverseString(s: string[]): void {
        let j = s.length - 1
        let i = 0
        while (j > i) {
            let temp = s[i]
            s[i] = s[j]
            s[j] = temp
            j--
            i++
        }
     };
     
     function swap(s, i, j) {
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
     }


     let left = 0
     let count = 1 
     let len = s.length
     while (left < len) {
        let right = 2 * k * count
        if (right < ) {
            
        }
        if (len - right < k) {
            
        }
        if (len - left < 2*k && len - left >= k) {
            
        }
        if (len - left > 2 * k) {
            swap(s, left, right - k)
        } 
        left = right
        
     }

    
};


/**
 * 自己看到题目的第一想法
 *     写逻辑判断去实现，没写出来
 * 看完代码随想录之后的想法 
 *    直接在K-1处翻转，
 * 自己实现过程中遇到哪些困难

 * 今日收获，记录一下自己的学习时长
 *  30min
 * 
 **/



/**
 * 剑指Offer 05.替换空格
 * https://leetcode.cn/problems/ti-huan-kong-ge-lcof/
 */

function replaceSpace(s: string): string {

};

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace1 = function(s) {
    // 字符串转为数组
   const strArr = Array.from(s);
   let count = 0;
 
   // 计算空格数量
   for(let i = 0; i < strArr.length; i++) {
     if (strArr[i] === ' ') {
       count++;
     }
   }
 
   let left = strArr.length - 1;
   let right = strArr.length + count * 2 - 1;
 
   while(left >= 0) {
     if (strArr[left] === ' ') {
       strArr[right--] = '0';
       strArr[right--] = '2';
       strArr[right--] = '%';
       left--;
     } else {
       strArr[right--] = strArr[left--];
     }
   }
 
   // 数组转字符串
   return strArr.join('');
 };

/**
 * 自己看到题目的第一想法
 *     字符串不可直接通过下标操作，不需额外空间没有思路，
 * 看完代码随想录之后的想法     
 *    双指针的思路还是比较经典，
 *      从后向前覆盖也很经典
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  25m
 **/


/**
 * 151. 反转字符串中的单词
 * https://leetcode.cn/problems/reverse-words-in-a-string/
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s:string) {
 return  s.match(/\w+/g).reverse().join(' ')
};

var reverseWords1 = function(s:string) {
      // 字符串转数组
      const strArr = Array.from(s);
      // 移除多余空格
      removeExtraSpaces(strArr);
      // 翻转
      reverse(strArr, 0, strArr.length - 1);
   
      let start = 0;
   
      for(let i = 0; i <= strArr.length; i++) {
        if (strArr[i] === ' ' || i === strArr.length) {
          // 翻转单词
          reverse(strArr, start, i - 1);
          start = i + 1;
        }
      }
   
      return strArr.join('');
   };
   
   // 删除多余空格
   function removeExtraSpaces(strArr) {
     let slowIndex = 0;
     let fastIndex = 0;
   
     while(fastIndex < strArr.length) {
       // 移除开始位置和重复的空格
       if (strArr[fastIndex] === ' ' && (fastIndex === 0 || strArr[fastIndex - 1] === ' ')) {
         fastIndex++;
       } else {
         strArr[slowIndex++] = strArr[fastIndex++];
       }
     }
   
     // 移除末尾空格
     strArr.length = strArr[slowIndex - 1] === ' ' ? slowIndex - 1 : slowIndex;
   }
   
   // 翻转从 start 到 end 的字符
   function reverse(strArr, start, end) {
     let left = start;
     let right = end;
   
     while(left < right) {
       // 交换
       [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
       left++;
       right--;
     }
   };


/**
 * 自己看到题目的第一想法
 *      直接用split(' ')
 *     用正则将单词匹配出来，依次放入数组，将数组反转，再join一把就OK
 * 看完代码随想录之后的想法 
 *    使用快慢指针替换多余空格，倒转再针对当个单个倒转
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  
 **/
