/**
 * 二叉树的遍历
 * https://leetcode.cn/problems/4sum/
 */

const Tree = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
  right: {
    val: 6,
    left: {
      val: 7,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  },
};
// // 前序遍历
// function frontTraversal(tree) {
//   if (tree) {
//     console.log(tree.val);
//     frontTraversal(tree.left);
//     frontTraversal(tree.right);
//   }
// }

// frontTraversal(Tree);

// 中序遍历
function midTraversal(tree) {
    if (tree) {
        midTraversal(tree.left);
        console.log(tree.val);
        midTraversal(tree.right);
    }

}
midTraversal(Tree);
/**
 * 自己看到题目的第一想法
 *     
 * 看完代码随想录之后的想法 
 *    
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  
 **/
