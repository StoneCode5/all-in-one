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

/**
 * 111.二叉树的最小深度
 * https://leetcode.cn/problems/minimum-depth-of-binary-tree/
 */





/**
 * 自己看到题目的第一想法
 *     和最大深度一样的思路
 * 看完代码随想录之后的想法 
 *    实际有坑，因为有某一侧没有子节点的情况，某一测没有子节点，就需要找另一侧的最小高度
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  
 **/



/**
 * 222.完全二叉树的节点个数
 * https://leetcode.cn/problems/count-complete-tree-nodes/
 */





/**
 * 自己看到题目的第一想法
 *     直接普通遍历就OK
 * 看完代码随想录之后的想法 
 *    采用中序遍历
 *    使用完全二叉树的的特性，满二叉树不需要遍历，可以直接计算，
 *    满二叉树节点数量= 2 的 层数次方 -1
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  巩固了完全二叉树的定义与特性
 **/