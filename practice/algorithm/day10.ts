/**
 * 232. 用栈实现队列
 * https://leetcode.cn/problems/implement-queue-using-stacks/
 */


class Stack {
    // public stack: any[]
    // public size: number
    constructor() {
        this.data = []
        this.size = 0
    }

    push(val) {
        this.stack.push(val)
        this.size++
    }

    pop() {
        this.stack.shift()
        this.size--
    }
}


class MyQueue {
    public stack1: any[]
    public stack2: any[]
    public size: number
    constructor() {
         this.stack1 = []
         this.stack2 = []
         this.size = 0
    }

    push(x: number): void {
        if (this.stack1.length <= this.stack2.length) {
            this.stack1.push(x)
        } else {
            this.stack2.push(x)
        }
    }

    pop(): number {
        if (this.stack1.length >= this.stack2.length) {
            
        }
    }

    peek(): number {

    }

    empty(): boolean {

    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


/**
 * 自己看到题目的第一想法
 *    两个栈循环交替输入，输出，应该也是可行的，思路其实有相似的地方，不过没有单纯一个输入栈，输出栈来的简单
 * 看完代码随想录之后的想法 
 *    
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  
 **/


/**
 * 225. 用队列实现栈
 * https://leetcode.cn/problems/implement-stack-using-queues/
 */





/**
 * 自己看到题目的第一想法
 *  2个队列，纷纷出队，用另一个队列来接收
 * 看完代码随想录之后的想法 
 *    1个队列，出队直至最后个一个元素，再入队，最后再出队
 * 自己实现过程中遇到哪些困难
    
 * 今日收获，记录一下自己的学习时长
 *  
 **/

