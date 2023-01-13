/**
 * Problem Statement

You are given two arrays 'A' and 'B’. You can insert any integer, any number of times, in array 'B'. You can
insert the integer at any position. Each insertion costs 1 coin. You need to find the minimum coins required to
 modify 2 array 'B' such that array 'A' becomes exactly same as 'B'


Note: Array 'A' contains pair-wise distinct elements wheareas array 'B' may or may not have duplicates.

Constraints
1< Na, Nb <105

1< Ali], Bli] < 109
Time Constraint: 1s 
 */

/**
 * Naive Approarch
 * Erase all elements in array A which are not there in array B
 * generate all permutations of remaining elements in array & for each sequence check for minimum cost
 * such that Array A becomes same as B
 * But here TC = O(m*n*n!)
 * 
 * Efficient Approarch
 * use Longest common subsequence
 */

let findLCS = (nums, k)=>{
    let n = 0;
    for (let i = 0; i < k; i++) {
        // find out position where element is to be inserted
        let pos = lowerBound(nums, n, nums[i])
        nums[pos] = nums[i]
        if(n == pos){
            n = pos+1
        }
    }
    return k
}

let lowerBound = (a, k, x)=>{
    let l = -1
    let r = k
    while (l+1<r) {
        let m = (l + r)>>> 1;
        if(a[m] >= x){
            r = m
        }
        else{
            l = m
        }
    }
    return r;
}

let minimumCost = (A, B, m, n, c)=>{
    //store position of element A
    let index = Array(100000).fil(0)
    //auxillary Array
    let nums = Array(100000).fil(0)

    //intialize index array with -1
    for (let i = 0; i < 100000; i++) {
        index[i] = -1 
    }
    // update index array with index of corresponding elements of B
    for (let i = 0; i < n; i++) {
        index[B[i]] = i
    }

    let k = 0
    for (let i = 0; i < m; i++) {
        if(index[A[i]]!= -1){
            nums[k++] = index[A[i]]
            k++
        }
    }

    //find lcs
    let lcs_length = findLCS(nums, k);

    //find elements to be added
    let elementCount = n -lcs_length

    let minCost = elementCount * c
    return minCost
}


const A = [1,6,3,5,10]
const B = [3,1,5]

//cost
const c = 2

const m = A.length
const n = B.length


console.log(minimumCost(A, B, m, n, c));