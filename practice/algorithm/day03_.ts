/**
 * 203. 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    const _head = new ListNode(null, head)
    let cur = head
    let pre = _head
    while (cur) {
        if (cur.val === val) {
            pre.next = cur.next
        } else {
            pre = cur
        }
        cur = cur.next
    }
    return _head.next
};

/**
 * 自己看到题目的第一想法
 *     没有想法
 * 看完代码随想录之后的想法 
 *      循环不变量原则，虚拟一个链表头，
 * 自己实现过程中遇到哪些困难
 *      用了3个指标来表示pre cur next，其实不需要， pre与 cur
 * 今日收获，记录一下自己的学习时长
 *      1.5小时
 **/

// 707 设计链表  

class MyLinkedList {
    constructor(val:any) {
        this.val = val
        this.next = null
    }

    get(index: number): number {

    }

    addAtHead(val: number): void {
        const item = {
            val
        }
    }

    addAtTail(val: number): void {

    }

    addAtIndex(index: number, val: number): void {

    }

    deleteAtIndex(index: number): void {

    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */





