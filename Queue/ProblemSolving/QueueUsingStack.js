const Stack = require("../16. Stacks and Easy Problems on Stacks(14th Oct 2022)/stack")

class QueueUsingStack{
    constructor() {
        this.stk1 = new Stack()
        this.stk2 = new Stack()
    }

    enqueue(value) {
        this.stk1.push(value)
    }

    dequeue() {
        console.log(this.stk1.data, this.stk2.data)
        if(this.isEmpty()) return null
        if(this.stk2.isEmpty()) {
            while(!this.stk1.isEmpty()) this.stk2.push(this.stk1.pop())
        }
        return this.stk2.pop()
    }

    getFront() {
        if(this.isEmpty()) return null
        if(this.stk2.isEmpty()) {
            while(!this.stk1.isEmpty()) this.stk2.push(this.stk1.pop())
        }
        return this.stk2.peek()
    }

    isEmpty() {
        return this.stk1.isEmpty() && this.stk2.isEmpty()
    }
}

const q = new QueueUsingStack()
for(let i = 10; i < 17; i++) {
    q.enqueue(i)
}
console.log(q.getFront()) // ?

while(!q.isEmpty()) console.log(q.dequeue())