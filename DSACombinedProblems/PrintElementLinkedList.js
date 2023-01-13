/**
 * Problem Statement

Given the number of nodes in a Linked List, and the elements in the linked list, 
print the even numbers present in the
whole list which are divisible by 3.

If there are no even number in the whole list, print “EMPTY”.

Constraints

1<T<10

1<N<105

-1018 < value of each node < 1018
Time Constraint: 1s in C++
 */

//Import linkedlist

function printList(){
    let current =  this.head;
    let output = ""

    let flag = false
    while(current){
        if(current.element % 2 == 0 && current.element % 3 == 0){
            output += current.element + " ";
            flag = true
        }
       
        current = current.next
        
    }
    console.log(output)

        if(flag == false){
            console.log("EMPTY LIST");
        }
    
}