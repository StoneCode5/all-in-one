/**
 * 110.平衡二叉树
 * https://leetcode.cn/problems/balanced-binary-tree/
 */

/**
 * 自己看到题目的第一想法
 *     思路还是从上到下，去求每个子树的高度，感觉求每个子树高度又是一个递归的过程 就想不出来了
 * 看完代码随想录之后的想法 
 *    思路应该改成从下到上，采取后序遍历，就一层一层的知道的每一个节点的左右子树的高度
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  
 **/

/**
 * 257. 二叉树的所有路径
 * https://leetcode.cn/problems/binary-tree-paths/
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) {
    return [];
  }
  let leftPath = binaryTreePaths(root.left);
  let rightPath = binaryTreePaths(root.right);
  leftPath.unshift(root.val);
  rightPath.unshift(root.val);
};

/**
 * 自己看到题目的第一想法
 *     
 * 看完代码随想录之后的想法 
 *   采用前序遍历，同时结合回溯
 * 自己实现过程中遇到哪些困难
    采用后序遍历，函数参数不让传另外的参数来接收完整的数组
 * 今日收获，记录一下自己的学习时长
 *  尝试15分钟
 *  视频15分钟
 *  其实是可以传不同参数的，力扣的示例只有一个参数其实没所谓
 **/

/**
 * 404.左叶子之和
 * https://leetcode.cn/problems/sum-of-left-leaves/
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

var sumOfLeftLeaves = function (root) {
    let sum = 0
    var sumLeaves = function (root, dict) {
        if (!root.left && !root.right) {
          if (dict === "left") {
            sum += root.val
          } 
        }
        if (root.left) {
          sumLeaves(root.left, "left");
        }
        if (root.right) {
          sumLeaves(root.right, "right");
        }
      };
      sumLeaves(root, 'right')
      return sum
  };

/**
 * 自己看到题目的第一想法
 *     如何确定一个节点是左叶子节点？
 *      左节点取值，右节点取0，
 *      写法有问题，传sum值有问题
 * 看完代码随想录之后的想法 
 *   后序遍历 即可得到 收集元素的时机在遍历到父节点时，收集其左叶子节点的值
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  
 **/
