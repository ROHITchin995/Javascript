/**
 * You are given two linked list A and B of size m,n. Your job is to merge both the linked list in a way that
there nodes are arranged in an alternate position. The first LL will contain the resultant list, while the
second has to become empty if all its elements are used else will contain the left out elements.
Note:
Perform an inplace insertion, keepint the time complexity as O(n)
Input:
1,3,5,7
2,4,6
Output:
1,2,3,4,5,6,7
Explaination
All the elements of list 2 are added in list one at alternate position, hence list is 1,2,3,4,5,6,7 and list 2
becomes empty
Example-2:
Input:
2,4,6,8
1,3,5,6,7
Output:
2,1,4,3,6,5,8,6
7
Explaination
After merging the list, node 7 is left out in list 2

Approach:
Given two list, we will iterate over both of the simultaneously, till the time either of them ends.
In the iteration, we will take the node from second list and add it as the next node of the node from the first list.
Post which we will update the head pointer of second list.

 */

function merge(l1, l2)
 {
 let curr_l1 = l1.head;
 let curr_l2 = l2.head;
let next_curr_l1 = null;
 let next_curr_l2 = null;

 while (curr_l1 != null && curr_l2 != null)
 {
 next_curr_l1=curr_l1.next;
 next_curr_l2 = curr_l2.next;

 curr_l2.next=next_curr_l1;
 curr_l1.next = curr_l2

 curr_l2 = next_curr_l2;
 curr_l1 = next_curr_l1;

 l2.head = curr_l2;


 }
 }
