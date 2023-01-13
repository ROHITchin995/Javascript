/**
 * Problem Statement
Varun has been given two ranges [l1, r1] and [l2, r2]. Find the maximum product of a and b such that l1 <= a <=r1 and
12 <= b <= r2.
Constraints:
-10% <12 <= r2 <= 109
-1011
1109
Time limit for this problem will be 1 second.
Input Format:
• The only line contains four space separated integers 11, r1, 12, r2.
Output Format:
Print the maximum product.
Sample Input:
1 4 2 9
Sample Output:
36
 */

//Approach 1
let l1 = 1, r1 = 4
let l2 = 2, r2 = 9

let MaxProduct = (l1, r1, l2, r2) => {
    let max = Number.MIN_VALUE
    let R1 = []
    let R2 = []

    for (let i = l1; i <= r1; i++) {
        R1.push(i)
    }
    for (let j = l2; j <= r2; j++) {
        R2.push(j)
    }

    // console.log(R1,R2);

    for (let i = 0; i < R1.length; i++) {

        for (let j = 0; j < R2.length; j++) {
            max = Math.max(max, R1[i] * R2[j])

        }
    }
    return max
}



console.log(MaxProduct(l1, r1, l2, r2));

//Approach 2

let MaxProduct2 = (l1, r1, l2, r2) => {
    let max = Number.MIN_VALUE


    for (let i = l1; i <= r1; i++) {

        for (let j = 0; j <= r2; j++) {
            max = Math.max(max, i * j)

        }
    }
    return max
}

console.log(MaxProduct2(l1, r1, l2, r2));

//Approach 3

let MaxProduct3 = (l1, r1, l2, r2) => {

    let a = l1 > r1 ? l1 : r1
    let b = l2 > r2 ? l2 : r2;

    return a * b
}

console.log(MaxProduct3(l1, r1, l2, r2));
