/**
 * 513.找树左下角的值
 * https://leetcode.cn/problems/find-bottom-left-tree-value/
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
 * @return {number}
 */

let maxLevel = -1
let result = null

var findBottomLeftValue = function(root, deep) {
    if (!root.left && !root.right) {
        if (deep > maxLevel) {
            result = root.val
        }
    }
    if (root.left) {
        deep += 1
        findBottomLeftValue(root.left, deep)
        deep -= 1
    }
    if (root.right) {
        deep += 1
        findBottomLeftValue(root.right, deep)
        deep -= 1
    }
    return result
};



/**
 * 自己看到题目的第一想法
 *     采用层级遍历的方式 
 * 看完代码随想录之后的想法  
 *    
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  想8分钟
 *  层序遍历可以实现，自己没想到
 *  递归法也可以实现
 **/


/**
 * 112. 路径总和
 * https://leetcode.cn/problems/path-sum/
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let path = []
    let result = false
    function traval(root) {
                if (!root) {
            return
        }
        path.push(root.val)
        if (!root.left && !root.right) {
            console.log('path', path)
            let sum = path.reduce((cur, next) => {
                return cur + next
            }, 0)
            if (targetSum === sum) {
                result = true
            }
            return
        }
        if (root.left) {
            traval(root.left)
            path.pop()
        }
        if (root.right) {
            traval(root.right)
            path.pop()
        }
    }
    traval(root)
    return result
};


/**
 * 自己看到题目的第一想法
 *     
 * 看完代码随想录之后的想法 
 *    
 * 自己实现过程中遇到哪些困难
    只在左树遍历完以后回溯，右树遍历完没有回溯，将右树遍历完以后也回溯就可以了
 * 今日收获，记录一下自己的学习时长
 *  
 **/