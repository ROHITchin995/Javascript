class Stack {
    constructor() {
    this.data = [];
    this.top = 0;
    }

    //push element
    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }

    //isEmpty
    isEmpty() {
        return this.size == 0
    }

    //pop
    pop() {
        if(!this.isEmpty()) {
            this.size--;
            return this.data.pop()
        } else {
            throw Error("Stack Underflow")
        }
    }
    //peek
    peek() {
        if (this.isEmpty()) return null;
        return this.data.at(-1)
    }

    //print stack
    print() {
        console.log(`The data in the stack is`,
                    this.data)
    }
       

}

class Node {
    constructor(value) {
    this.value = value;
    this.next = null;
    }
   }
//    class Stack {
//     constructor() {
//     this.top = null;
// }
// }
   
const stack = new Stack();
console.log(stack.data.length)

stack.push(100);

console.log(stack.isEmpty());
console.log(stack.pop());

