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
    const stack = []
    const result = []
    let i = root
    if (root.val) {
        stack.push(root)
    }
    function loop(node) {
        if (node.left.val) {
            stack.push(root.left)
        }
        if (node.right.val) {
            stack.push(root.right)
        }
    }

    while (stack.length) {
        i = stack.pop()
        console.log(i)
        loop(i)
    }
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