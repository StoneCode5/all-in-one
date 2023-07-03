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


function LinkNode(val: any, next: any) {
    this.val = val
    this.next = next ? next : null
    return this
}


class MyLinkedList {
    constructor(val: any) {
        this._head = null
        this._tail = null
        this.size = 0
    }

    getNode(index: number) {
        if (index < 0 || index >= this.size) {
            return -1
        }
        let cur = new LinkNode(0, this._head)
        while (index--) {
            cur = cur.next
        }
        return cur  
    }

    get(index: number): number {
        let curNode = this.getNode(index)
        return curNode === -1 ? curNode : curNode.val
    }

    addAtHead(val: number): void {
       
    }

    addAtTail(val: number): void {

    }

    addAtIndex(index: number, val: number): void {
        let cur =  this.getNode(index - 1)
        const newNode = LinkNode(val, cur.next)
        cur.next = newNode
        this._size++
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

/**
 * 自己看到题目的第一想法
 *     计算总是习惯用累加
 * 看完代码随想录之后的想法 
 *      计数总是喜欢用累加、其实有时可以合理的适用减法，结合0值，可以少一个单独的count变量
 *      
 * 自己实现过程中遇到哪些困难
 *      用了3个指标来表示pre cur next，其实不需要， pre与 cur
 * 今日收获，记录一下自己的学习时长
 *      1.5小时
 **/



