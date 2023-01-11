/**
 * Given a linked list and a value k, perform a right rotation such that the kth node reaches the end of the linked list..
Input :
1,2,3,4,5,6
k=3
Output:
4,5,6,1,2,3
Approach:
In order to make the linked list nodes rotated k times, we will first make the next of the kth node as NULL
and then set the next of the last node to the head of the list and then finally update the head of the list to
point at k+1 nt node.

 */

rotateLL(k){
    if(k>=this.length)
    return
    let kth_node = this.head;
    //Get the kth node
    for(let idx=1;idx<k;idx++)
    kth_node=kth_node.next;
    //Nodes from k+1 to end of
   list
    let remaining_nodes =
   kth_node.next;
    //Make kth node the last node
    kth_node.next = null;
    let ptr = remaining_nodes
    while(ptr.next!=null)
    ptr=ptr.next
    ptr.next=this.head
    this.head=remaining_nodes
   
    }