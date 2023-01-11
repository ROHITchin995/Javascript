class Queue {

    constructor(){
    this.data = [];
    this.rear = 0;
    this.front = 0;
    }
    enqueue(ele) {
        this.data[this.rear] = ele;
        this.rear = this.rear + 1;
        } 
        
    dequeue() {
            if(this.isEmpty() === false) {
            This.data[this.front] = 0;
            this.front = this.front + 1;
            return this.data[this.front];
            }
            }
    
    }
class Deque {
    constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
    }

    addBack(element) {
        this.items[this.rear] = element;
        this.rear++;
       }
       
    
       addFront(element) {
        if (this.isEmpty()) { //1
        this.addBack(element);
        } else if (this.front > 0) { //2
        this.front --;
        this.items[this.front] = element;
        } else { //3
        for (let index = this.rear; index > 0; index--) {
        this.items[index] = this.items[index -1];
        } this.rear++;
        this.items[0] = element;
        } return true;
        }
    
        removeFront() {
            if (this.isEmpty()) {
            return undefined;
            }
            let result = this.items[this.front];
            this.items[this.front] = 0;
            this.front++;
            return result;
            }
           
        removeBack() {
            if (this.isEmpty()) {
            return undefined;
            }
            let result = this.items[this.rear - 1];
            this.items[this.rear - 1] = 0;
            this.rear--;
            return result;
            }

            
        }


       