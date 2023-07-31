/**
 * 102. 二叉树的层序遍历
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    const queue = []
    const result = []
    queue.push(root)
    while (queue.length) {
        let curentLength = queue.length
        const currentLevelArr = []
        for (let i = 0; i < curentLength; i++) {
            const item = queue.shift()
            currentLevelArr.push(item.val)
            item.left && queue.push(item.left)
            item.right && queue.push(item.right)
        }
        result.push(currentLevelArr)
    }
    return result
};






/**
 * 自己看到题目的第一想法
 *     
 * 看完代码随想录之后的想法 
 *    
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  记录队列的长度来确定层级的长度
 **/

/**
 * 102. 翻转二叉树
 * https://leetcode.cn/problems/invert-binary-tree/
 */


function traval(node) {
    if (!node) {
        return
    }
    console.log(node)
    let temp = node.left
    node.left = node.right
    node.right = temp
    traval(node.left)
    traval(node.right)
    return node
}

/**
 * 自己看到题目的第一想法
 *     
 * 看完代码随想录之后的想法 
 *    
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  在递归函数中，第一个开始执行的函数，处于执行栈的栈底，是最后一个执行结束的函数。
 **/


/**
 * 101. 对称二叉树
 * https://leetcode.cn/problems/symmetric-tree/description/
 */

var isSymmetric = function(root) {
    // 使用递归遍历左右子树 递归三部曲
    // 1. 确定递归的参数 root.left root.right和返回值true false 
    const compareNode = function(left, right) {
        // 2. 确定终止条件 空的情况
        if(left === null && right !== null || left !== null && right === null) {
            return false;
        } else if(left === null && right === null) {
            return true;
        } else if(left.val !== right.val) {
            return false;
        }
        // 3. 确定单层递归逻辑
        let outSide = compareNode(left.left, right.right);
        let inSide = compareNode(left.right, right.left);
        return outSide && inSide;
    }
    if(root === null) {
        return true;
    }
    return compareNode(root.left, root.right);
};




/**
 * 自己看到题目的第一想法
 *     层序遍历，直接反转数组，判断是否相等就可以了
 * 看完代码随想录之后的想法 
 *    二叉树后序遍历的用法
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  对于数组是否相等，可以使用字符串来判断
 *  
 **/

