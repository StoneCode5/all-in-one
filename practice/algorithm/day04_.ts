/**
 * 142.环形链表II
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
    let set = new Set()
    let cur = head
    while (cur) {
        if (set.has(cur)) {
            return cur
        }
        set.add(cur)
        cur = cur.next
    }
};

/**
 * 自己看到题目的第一想法
 *     
 * 看完代码随想录之后的想法 
 *      双指针算法太过复杂，
 *      直接掌握
 * 自己实现过程中遇到哪些困难
 *      如何存储指标与查询指针
 *      JS中采用set来做hash table
 * 今日收获，记录一下自己的学习时长
 *     0.5小时
 **/
