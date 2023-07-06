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
  const _head = new ListNode(null, head);
  let cur = head;
  let pre = _head;
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next;
    } else {
      pre = cur;
    }
    cur = cur.next;
  }
  return _head.next;
}

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
  this.val = val;
  this.next = next ? next : null;
  return this;
}

class MyLinkedList {
  constructor(val: any) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getNode(index: number) {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let cur = new LinkNode(0, this.head);
    while (index--) {
      cur = cur.next;
    }
    return cur;
  }

  get(index: number): number {
    let curNode = this.getNode(index);
    return curNode === -1 ? curNode : curNode.val;
  }

  addAtHead(val: number): void {
    if (!this.head) {
      this.head = new LinkNode(val, null);
    } else {
      const node = new LinkNode(val, this.head);
      this.head = node;
    }
    this.size++;
  }

  addAtTail(val: number): void {
    const node = new LinkNode(val, null);
    if (!this.tail) {
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    let cur = this.getNode(index - 1);
    const newNode = LinkNode(val, cur.next);
    cur.next = newNode;
    this.size++;
  }

  deleteAtIndex(index: number): void {
    let cur = this.getNode(index - 1);
    if (cur !== -1) {
        cur.next = cur.next.next
    }
  }
}

class ListNode {
    public val: number;
    public next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

class MyLinkedList1 {
    // 记录链表长度
    private size: number;
    private head: ListNode | null;
    private tail: ListNode | null;
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // 获取链表中第 index个节点的值
    get(index: number): number {
        // 索引无效的情况
        if (index < 0 || index >= this.size) {
            return -1;
        }
        let curNode = this.getNode(index);
        // 这里在前置条件下，理论上不会出现 null的情况
        return curNode.val;
    }

    // 在链表的第一个元素之前添加一个值为 val的节点。插入后，新节点将成为链表的第一个节点。
    addAtHead(val: number): void {
        let node: ListNode = new ListNode(val, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }

    // 将值为 val 的节点追加到链表的最后一个元素。
    addAtTail(val: number): void {
        let node: ListNode = new ListNode(val, null);
        if (this.tail) {
            this.tail.next = node;
        } else {
            // 还没有尾节点，说明一个节点都还没有
            this.head = node;
        }
        this.tail = node;
        this.size++;
    }

    // 在链表中的第 index个节点之前添加值为 val的节点。
    // 如果 index等于链表的长度，则该节点将附加到链表的末尾。如果 index大于链表长度，则不会插入节点。如果 index小于0，则在头部插入节点。
    addAtIndex(index: number, val: number): void {
        if (index === this.size) {
            this.addAtTail(val);
            return;
        }
        if (index > this.size) {
            return;
        }
        // <= 0 的情况都是在头部插入
        if (index <= 0) {
            this.addAtHead(val);
            return;
        }
        // 正常情况
        // 获取插入位置的前一个 node
        let curNode = this.getNode(index - 1);
        let node: ListNode = new ListNode(val, curNode.next);
        curNode.next = node;
        this.size++;
    }

    // 如果索引 index有效，则删除链表中的第 index个节点。
    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) {
            return;
        }
        // 处理头节点
        if (index === 0) {
            this.head = this.head!.next;
            // 如果链表中只有一个元素，删除头节点后，需要处理尾节点
            if (index === this.size - 1) {
                this.tail = null
            }
            this.size--;
            return;
        }
        // 索引有效
        let curNode: ListNode = this.getNode(index - 1);
        curNode.next = curNode.next!.next;
        // 处理尾节点
        if (index === this.size - 1) {
            this.tail = curNode;
        }
        this.size--;
    }

    // 获取指定 Node节点
    private getNode(index: number): ListNode {
        // 这里不存在没办法获取到节点的情况，都已经在前置方法做过判断
        // 创建虚拟头节点
        let curNode: ListNode = new ListNode(0, this.head);
        for (let i = 0; i <= index; i++) {
            // 理论上不会出现 null
            curNode = curNode.next!;
        }
        return curNode;
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
 *      设计链表时，不难，主要是要任何操作都需要注意处理头尾节点
 *      1.5小时
 **/


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

function reverseList(head: ListNode | null): ListNode | null {
    let pre = head
    let cur = pre.next
    if (!cur) {
        return head
    }
    while (cur) {
        let next = cur.next
        cur.next = pre
        if (!next ) {
            return cur
        }
        pre = cur
        cur = next
    }
};

function reverseList1(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;
    let temp = null, pre = null, cur = head;
    while(cur) {
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    // temp = cur = null;
    return pre;
};

/**
 * 链表总结1
 *      - 虚拟头节点的使用，可以避免特殊处理头节点
 *      - 计数总是喜欢用累加、其实有时可以合理的适用减法，结合0值，可以少一个单独的count变量
 *      - 设计链表时，不难，主要是要任何操作都需要注意处理头尾节点
 *      - 反转链表时，初始化pre为null，保持一致性很重要（循环不变量），不一致补充一致
 */
