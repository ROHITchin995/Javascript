// Node class
class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

//SinglyLinkedList class
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    //Adding a Node 
    insertAtStart(data){
        let newNode = new Node(data) // create a new node
        newNode.next = this.head // set next node of new node to current head
        this.head = newNode; //update the head pointer to new node
        this.length++
    }
    //Traversing/Iterating & printing the linked list
    printLinkedList(){
        let current = this.head;

    // print till current exists or current is truthy i.e current != null

    while(current){
        console.log(current);
        current = current.next
    }
    }
    // method to display length of list
    size(){
        console.log("Length of Linked List is ", this.length);
    }

    //Insert node at end
    insertAtEnd(data){
        let newNode = new Node(data) // create a new node
        // if empty create head
        if(this.head === null){
            this.head = newNode;
            this.length++
        }else{
            let current = this.head
            //tranverse till current.next != null
            while(current.next){
                current = current.next
            }
            current.next = newNode;
            this.length++
        }
    }

    //Insert anywhere between start and end
    insertAtIndex(data, index){
        // if insert at first
        if(index == 0){
            this.insertAtStart(data)
        }
        // if out of range
        else if(index < 0 || index >= this.length){
            console.log("Index out of bounds, enter valid index");
        }
        else{
            let newNode = new Node(data) // create a new node
            let current, previous;
            current = this.head
            let count = 0

            //tranverse till index - 1 as linked list has 0 base index
            while(count < index){
                previous = current;
                current = current.next
                count++;
            }
            newNode.next = current; //set next of new node to current node
            previous.next = newNode // set next of previous node to new node
            this.length++
        }
    }

    //get data at index
    getElement(index){
        if(index < 0 || index >= this.length){
            console.log("index out of bound, enter valid index");
        }
        else{
            let current = this.head
            let count = 0
            while(current){
                if(count == index){
                    console.log(current.data);
                }
                count++
                current = current.next;
            }
        }
    }

    // delete from start
    removeAtStart(){
        if(!this.head){
            return false
        }
        
        let current = this.head;
        this.head = this.head.next;
        current = null
        this.length--
    }

    //delete node at index
    removeAtIndex(index){
        if(index == 0){
            this.removeAtStart()
        }
        else if(index < 0 || index >= this.length){
            console.log("index out of bound, enter valid index");
        }
        else{
            let current, previous;
            current = this.head
            let count = 0
            while(count < index){
                count++
                previous = current
                current = current.next
            }
            previous.next = current.next
            console.log(current)
            this.length--
        }
    }
}

const ll = new SinglyLinkedList()
ll.insertAtStart(100)
ll.insertAtStart(500)
console.log("After insert at start");
ll.printLinkedList()
ll.size()

ll.insertAtEnd(800)
ll.insertAtEnd(600)
console.log("After insert at end");
ll.printLinkedList()
ll.size()

ll.insertAtIndex(50, 2)
ll.insertAtIndex(90, 1)
console.log("After insert at index");
ll.printLinkedList()
ll.size()

ll.getElement(3)

ll.removeAtStart()


console.log("After remove at index");
ll.removeAtIndex(4)
ll.printLinkedList()
ll.size()

//--------------------------------------------------------------------
//Doubly Linked Lists

class dllNode {
    constructor(data){
        this.data = data;
        this.previous = null
        this.next = null
    }
}

// creating doubly linked list
class DoublyLinkedList {
    constructor(){
        this.head = null
        this.length = 0
    }
    //Insert at start
    insertAtStart(data) {
        let newdllNode = new dllNode(data); // Create a new node
        newdllNode.next = this.head; // Set next node of new node to current head
       newdllNode.previous = null; // Set previous of new node as null
        // Update previous of head as new node only if had is not null
        if(this.head != null){
        this.head.previous = newdllNode;
        }
        this.head = newdllNode; // Update the head pointer to the new node
        this.length++;
       }

       //print list
    printLinkedList() {
        let current = this.head;
    // print till current exists or current is truthy i.e. current != null
        while (current) {
    console.log(current);
        current = current.next; // update current to next node
        }
        }

        // size method to display length of list
    size() {
    console.log('Length of Doubly Linked list is ' + this.length);
    }

    //insert at end
        insertAtEnd(data) {
    let newdllNode = new dllNode(data); //Create a new node
    // if empty, create head
    if (this.head == null) {
    this.head = newdllNode;
    this.length++;
    } else {
    let current = this.head;
    // traverse till current.next != null
    while (current.next) {
    current = current.next;
    }
    current.next = newdllNode; // Set next of current node to new node
    newdllNode.previous = current; // Set previous of new node to current  node
    // Set next of new node node to null as it is the last node
    newdllNode.next = null;
    this.length++;
    }
    }

    //insert at index
    insertAtIndex(data, index) {
        // if first element
        if (index == 0) {
        this.insertAtStart(data);
        }
        // if out of range
        else if (index < 0 || index >= this.length) {
        console.log('Array index out of bounds enter valid index');
        } else {
        let newdllNode = new dllNode(data); //Create a new node
        let current = this.head; // maintain current node
        let count = 0;
        // traverse till index - 1 as linked list has 0 based indexing
        while (count < index) {
        current = current.next;
        count++;
        }
        //Set previous of new node to previous of current node
        newdllNode.previous = current.previous;
        newdllNode.next = current; //Set next of new node to current node
        newdllNode.previous.next = newdllNode; //Set previous of new node's next to new node
        current.previous = newdllNode; //Set previous of current node to new node
        this.length++;
        }
    }
        
    //get element at index
    getElement(index) {
        if (index < 0 || index >= this.length) {
        console.log('Array index out of bounds enter valid index');
        } else {
        let current = this.head;
        let count = 0;
        while (current) {
        if (count == index) {
        console.log(current.data);
        }
        count++;
        current = current.next;
        }
        }
    }

    //remove at start
    removeAtStart() {
        if (!this.head) {
        return false;
        }
        // store the current element to be deleted
        let current = this.head;
        // point current head to new head
        current = this.head.next;
        // set previous of new head to null
        this.head.previous = null;
        this.length--;
    }
       
    //remove at index
    removeAt(index) {
        // if index = 0 implement removeAtStart()
        if (index == 0) {
        this.removeAtStart();
        } else if (index < 0 || index >= this.length) {
        console.log('Array index out of bounds enter valid index');
        } else {
        let current = this.head;
        let count = 0;
        // Traverse till count is index - 1
        while (count < index) {
        count++;
        current = current.next;
        }
        // if previous element is not null
        if (current.previous != null) {
            current.previous.next = current.next;
            current.next.previous = current.previous;
            }
            // set deleted current element to null
            current = null;
            this.length--;
            }
     }
           
       
}

const dll = new DoublyLinkedList();
dll.insertAtStart(100);
dll.insertAtStart(500);
dll.insertAtStart(1000);
dll.printLinkedList();

dll.insertAtStart(1000);
dll.printLinkedList();
dll.size();

dll.insertAtEnd(800);
dll.insertAtEnd(600);
dll.printLinkedList();
dll.size();

dll.insertAtIndex(50, 1);
dll.insertAtIndex(250, 3);
dll.printLinkedList();
dll.size();

dll.getElement(0);
dll.getElement(4);
dll.size();


dll.removeAtStart();
dll.printLinkedList();
dll.size();


//Circular Linked Lists
class cllNode {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class CircularLinkedList {
    constructor(){
        this.tail = null
        this.length = 0
    }

    //insert to empty list
    insertToEmpty(tail, data) {
        if (this.tail != null) {
        return this.tail;
        }
        let newCllNode = new cllNode(data);
        this.tail = newCllNode; // Update the head pointer to the new node
        this.tail.next = newCllNode;
        // console.log(this.tail);
        this.length++;
        return this.tail;
        }

    //print list
    printCircularLinkedList(tail) {
        let current;
        if (tail == null) {
        console.log('List is empty');
        return;
        }
        current = this.tail.next;
        do {
        console.log(current.data);
        // console.log(current);
        current = current.next;
        } while (current != this.tail.next);
    }

    //size of cll
    size() {
        console.log('Length of Circular Linked list is ' + this.length);
    }

    //insert at start
    insertAtStart(data) {
        if (this.tail == null) {
        return this.insertToEmpty(this.tail, data);
        }
        let newNode = new Node(data); // Create a new node
        newNode.next = this.tail.next; // Set next node of new node to current head
        this.tail.next = newNode;
        this.length++;
        return this.tail;
    }

    //insert at end
    insertAtEnd(data) {
        if (this.tail == null) {
        return this.insertToEmpty(this.tail, data);
        }
        let newNode = new Node(data); // Create a new node
        newNode.next = this.tail.next; // Set next node of new node to current head
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.tail;
     }
     
    //insert at index
    insertAtIndex(data, index) {
        // if first element
        if (index == 0) {
        this.insertAtStart(data);
        }
        // if out of range
        else if (index < 0 || index >= this.length) {
        console.log('Array index out of bounds enter valid index');
        } else {
        let newNode = new Node(data); //Create a new node
        let current, previous;
        current = this.tail.next; // maintain current node
        let count = 0;
        // traverse till index - 1 as linked list has 0 based indexing
        while (count < index) {
            previous = current;
        current = current.next;
        count++;
        }
        newNode.next = current; //Set next of new node to current node
        previous.next = newNode; //Set previous of new node's next to new
        node
        this.length++;
        return this.tail;
        }
    }

    //get elment at index
    getElement(index) {
        if (index < 0 || index >= this.length) {
        console.log('Array index out of bounds enter valid index');
        } else {
        let current = this.tail.next;
        let count = 0;
        do {
        if (count == index && current != null) {
        console.log(current.data);
        }
        count++;
        current = current.next;
        } while (current != this.tail.next);
        }
    }

    //remove at index
    removeAt(index) {
        // if index is 0
        if (index == 0) {
        if (!this.tail.next) {
        return false;
        }
        let current = this.tail.next;
        this.tail.next = current.next;
        current = null;
        this.length--;
        } else if (index < 0 || index >= this.length) {
        console.log('Array index out of bounds enter valid index');
        } else {
        let current, previous;
        // current is set to head which is at tail.next
        current = this.tail.next;
        let count = 0;
        while (count < index) {
        count++;
        previous = current; // set previous to current
        current = current.next; // set current to next of current
        }
        previous.next = current.next; // set next of previous to next of current
        current = null; // set current element to be deleted as null
        this.length--;
    }
    }

    //
}

let tail = null;
tail = cll.insertToEmpty(tail, 100);
cll.printCircularLinkedList(tail);
cll.size();

tail = cll.insertAtStart(500);
tail = cll.insertAtStart(1000);
cll.printCircularLinkedList(tail);
cll.size();

tail = cll.insertAtStart(500);
tail = cll.insertAtStart(1000);
tail = cll.insertAtEnd(800);
tail = cll.insertAtEnd(600);
cll.printCircularLinkedList(tail);
cll.size();

tail = cll.insertAtStart(500);
tail = cll.insertAtStart(1000);
tail = cll.insertAtEnd(800);
tail = cll.insertAtEnd(600);
tail = cll.insertAtIndex(50, 1);
tail = cll.insertAtIndex(250, 3);
cll.printCircularLinkedList(tail);
cll.size();

tail = cll.insertAtEnd(800);
tail = cll.insertAtEnd(600);
tail = cll.insertAtIndex(50, 1);
tail = cll.insertAtIndex(250, 3);
cll.printCircularLinkedList(tail);
console.log();
cll.getElement(4);
cll.getElement(3);
cll.size();

tail = cll.insertAtStart(500);
tail = cll.insertAtStart(1000);
tail = cll.insertAtEnd(800);
tail = cll.insertAtEnd(600);
tail = cll.insertAtIndex(50, 1);
tail = cll.insertAtIndex(250, 3);
console.log();
cll.removeAt(0);
cll.removeAt(2);
cll.printCircularLinkedList(tail);
cll.size();