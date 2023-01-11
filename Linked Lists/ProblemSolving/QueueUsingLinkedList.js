/**
 * Implement queue operations using the Linked Listb
b
Approach – Our task is to implement Queue using Linked List. Basically, we need to implement the below 2
operations -


 3. Enqueue() - Adding element to rearb
 4. Dequeue() - Removing element from front


Since its a linked list, we will add a new node at the last and update rear to its next node. Similarly, we will
remove the front node and update the front next to it.b
b
Steps -


 ,. enqueue(item) -a
+ Create a nodea
+ If queue is empty, front and rear of queue will be nodea
+ Else, append node at rear


 2. dequeue() -a
+ Fetch element from fronta
+ Update front to front.nexta
+ If front = null -> rear = null


Time Complexity –


Time complexity for enqueue() and dequeue() operations will be O(,) b
 */

// JavaScript program for linked-list implementation of queue
class QNode
{
    constructor(key)
    {
        this.key = key;
        this.next = null;
    }
}
  
let front = null, rear = null;
  
function enqueue(key)
{
    // Create a new LL node
        let temp = new QNode(key);
    
        // If queue is empty, then new node is front and rear both
        if (rear == null) {
            front = rear = temp;
            return;
        }
    
        // Add the new node at the end of queue and change rear
        rear.next = temp;
        rear = temp;
}
  
  
function dequeue()
{
    // If queue is empty, return NULL.
        if (front == null)
            return;
    
        // Store previous front and move front one node ahead
        let temp = front;
        front = front.next;
    
        // If front becomes NULL, then change rear also as NULL
        if (front == null)
            rear = null;
}
  
  
enqueue(10);
enqueue(20);
dequeue();
dequeue();
enqueue(30);
enqueue(40);
enqueue(50);
dequeue();
document.write("Queue Front : " + front.key+"<br>");
document.write("Queue Rear : " + rear.key+"<br>");
  
  