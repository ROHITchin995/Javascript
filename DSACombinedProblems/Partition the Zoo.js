/**
 * There is a zoo with N animals of different kinds represented by the string A, each kind of animal is represented as a
letter from the lower case english alphabet. You need to partition the zoo into two zoos at index k such that the first
zoo contains the animals from A[1] to A[K], and the second zoo contains animals from A[k+1] till A[N], You want to
partition such that the common number of distinct animals in both the zoos is maximized
Input Format
The first line contains an integer N denoting the total number of animals
The second line contains the string A
Output Format
Print an integer denoting the common number of distinct animals in both the zoos is maximized

Constraint
1<=N<=10^5
'a'<=A[i]<='z'
Sample Input
6
zzttcz
Sample output
2
 */
function PartitionZoo(n, animals) {
    let s = animals.split('')
    let pref = prefil2DArray(26, n)

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 26; j++) {
            pref[j][i + 1] = pref[j][i];
        }
        pref[getAlphabetIndex(s[i])][i + 1]++
    }
    let result = 0;
    for (let i = 0; i < n + 1; i++) {
        let tempResult = 0
        for (let j = 0; j < 26; j++) {
            if (pref[j][i + 1] > 0 && pref[j][n] - pref[j][i + 1] > 0) {
                tempResult++
            }
        }
        result = Math.max(tempResult, result)
    }
    console.log(result);
}


PartitionZoo(6, 'zzttcz');
// returns prefilled [[1] with 0's
// Input: 12,1 = 2
// Output: [[0,0], [0, 011
function prefil2DArray(i, j) {
    return Array(i).fill().map(() => Array(j).fill(0));
}
// returns index in the English Alphabet
// Input: b
// Output: 1
function getAlphabetIndex(c) {
    return c.charCodeAt(0) - 'a'.charCodeAt(0);
}