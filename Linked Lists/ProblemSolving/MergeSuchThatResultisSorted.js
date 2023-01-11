/**
 * Given two sorted linked list, your job is to merge them in a way such that the resultant list is also sorted
Input:
1,2,3,4
1,4,5
Output:
1,1,2,3,4,4,5
Explanation:
On combining both the linked list, the sorted value will be in the following order 1,1,2,3,4,4,5
Approach:
Similar to the concept of merge sort, we will take help of the merge function to combine both the linked list in
sorted order to create a resultant list.
1. Verify that none of the list is empty
2. Determine the head of the list by selecting the list whose head node is smaller
3. Iterative over the list nodes till the time either of the list is completely traversed
4. On iteration check the node with smaller value and then add that node to the resultant list
5. Once the iteration of either one of the node is completed then add the elements of the other list directly
to the resultant list.
 */

function mergeList(l1,l2){
    let resultantList = new LinkedList();
     while(l1!=null && l2!=null){
     if(l1.data<l2.data){
     resultantList.addNode( new ListNode(l1.data));
     l1 = l1.next;
     }
     else{
     resultantList.addNode( new ListNode(l2.data));
     l2 = l2.next;
     }
     }
     if(l1!=null){
     while(l1!=null){
     resultantList.addNode( new ListNode(l1.data));
     l1=l1.next;
     }
     }
     else{
     while(l2!=null){resultantList.addNode( new ListNode(l2.data));
        l2=l2.next;
        }
        }
        return resultantList;
       