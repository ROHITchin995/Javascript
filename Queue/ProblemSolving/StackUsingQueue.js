class StackUsingQueue{
    constructor() {
        this.q1 = new Queue()
        this.q2 = new Queue()
    }

    push(value) {
        this.q1.enqueue(value)
    }

    pop(){
        console.log(this.q1.getData(), this.q2.getData())
        while(this.q1.getLength() > 1) this.q2.enqueue(this.q1.dequeue())
        console.log(this.q1.getData(), this.q2.getData())
        let result = this.q1.dequeue();
        console.log(this.q1.getData(), this.q2.getData())
        while(!this.q2.isEmpty()) this.q1.enqueue(this.q2.dequeue())
        console.log(this.q1.getData(), this.q2.getData())
        return result
    }

    isEmpty() {
        return this.q1.isEmpty()
    }

    top() {
        if(this.isEmpty()) return null;
        while(this.q1.getLength() > 1) this.q2.enqueue(this.q1.dequeue())
        let result = this.q1.dequeue();
        while(!this.q2.isEmpty()) this.q1.enqueue(this.q2.dequeue())
        this.q1.enqueue(result)
        return result
    }

    print() {
        console.log(this.q1.getData())
    }
}
