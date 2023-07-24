/**
 * 104. 二叉树的最大深度
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/
 */

var maxdepth = function(root) {
    //使用递归的方法 递归三部曲
    //1. 确定递归函数的参数和返回值
    const getdepth = function(node) {
    //2. 确定终止条件
        if(node === null) {
            return 0;
        }
    //3. 确定单层逻辑
        let leftdepth = getdepth(node.left);
        let rightdepth = getdepth(node.right);
        let depth = 1 + Math.max(leftdepth, rightdepth);
        return depth;
    }
    return getdepth(root);
};




/**
 * 自己看到题目的第一想法
 *     没思路
 * 看完代码随想录之后的想法 
 *    后序遍历的思路
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  
 **/