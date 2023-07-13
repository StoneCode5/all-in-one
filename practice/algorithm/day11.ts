/**
 * 20. 有效的括号
 * https://leetcode.cn/problems/valid-parentheses/
 */


function isValid(s: string): boolean {
    let helperStack: string[] = [];
    for (let i = 0, length = s.length; i < length; i++) {
        let x: string = s[i];
        switch (x) {
            case '(':
                helperStack.push(')');
                break;
            case '[':
                helperStack.push(']');
                break;
            case '{':
                helperStack.push('}');
                break;
            default:
                if (helperStack.pop() !== x) return false;
                break;
        }
    }
    return helperStack.length === 0;
};


/**
 * 自己看到题目的第一想法
 *     
 * 看完代码随想录之后的想法 
 *    
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  
 **/


/**
 * 1047. 删除字符串中的所有相邻重复项
 * https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/
 */

var removeDuplicates = function(s) {
    const result = []
    for(const i of s){
        if(i === result[result.length-1]){
            result.pop()
        }else{
            result.push(i)
        }
    }
    return result.join('')
};



/**
 * 自己看到题目的第一想法
 *     双指针来比对，时间复杂度比较高
 * 看完代码随想录之后的想法 
 *    栈用来解决此类比较相邻元素是超级合适的
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  
 **/

/**
 * 150. 逆波兰表达式求值
 * https://leetcode.cn/problems/evaluate-reverse-polish-notation/
 */

var evalRPN = function (tokens) {
    const stack = [];
    for (const token of tokens) {
        if (isNaN(Number(token))) { // 非数字
            const n2 = stack.pop(); // 出栈两个数字
            const n1 = stack.pop();
            switch (token) { // 判断运算符类型，算出新数入栈
                case "+":
                    stack.push(n1 + n2);
                    break;
                case "-":
                    stack.push(n1 - n2);
                    break;
                case "*":
                    stack.push(n1 * n2);
                    break;
                case "/":
                    stack.push(n1 / n2 | 0);
                    break;
            }
        } else { // 数字
            stack.push(Number(token));
        }
    }
    return stack[0]; // 因没有遇到运算符而待在栈中的结果
};


/**
 * 自己看到题目的第一想法
 *     
 * 看完代码随想录之后的想法 
 *    
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  充分利用栈先进后出的特点，在相邻消除类应该想到它
 **/

