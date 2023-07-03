/**
 * 19. 删除链表的倒数第N个结点
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let diyHead = new ListNode(0, head)
    let fast = diyHead
    let slow = diyHead
    n += 1
    while (n--) {
        fast = fast.next    
    }

    while (fast) {
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next
    
    return diyHead.next
};

/**
 * 自己看到题目的第一想法
 *     找到倒数第N个结点，可通过while
 *      然后删除
 * 看完代码随想录之后的想法 
 *      双指针中的快慢指针,倒数顺序的方法
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  30分钟
 **/


/**
 * 面试题 02.07. 链表相交
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
 class Solution {
    public:
        ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
            
        }
    };
/**
 * 自己看到题目的第一想法
 *     没看懂
 * 看完代码随想录之后的想法 
 *      双指针中的快慢指针,倒数顺序的方法
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  30分钟
 **/


/** 142. 环形链表 II
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function detectCycle(head: ListNode | null): ListNode | null {
    
};
/**
 * 自己看到题目的第一想法
 *     没看懂
 * 看完代码随想录之后的想法 
 *      双指针中的快慢指针,倒数顺序的方法
 * 自己实现过程中遇到哪些困难
    如何判断环？
 * 今日收获，记录一下自己的学习时长
 *  30分钟
 **/
