/**
 * Problem Statement
Alice has a connected tree having N nodes numbered through 1 to N. Nodes of the tree are connected through N-1
bi-directional edge. It is known that the tree is rooted at node 1. In Alice's city, the fire is gravitational, i.e If you fire up
a node X in the tree then it will burn all the nodes that are present in the subtree of node X(including node X).
You will be given Q queries in i-th query, Alice asked you to fire up the tree exactly at one node in such a way
that it burns nodes numbered Ai and Bi. But the constraint is that you have to fire up the tree in such a way that it
burns the minimum possible number of nodes. For each query print the minimum possible number of nodes that will
burn in your fire.
Note 1:- The tree is connected, which means always exists at least one way in which you can fire up the tree in such
a way that node A and node B will burn.
Note 2:- Each query is independent of the other, i.e after each query tree will be restored as the initial one.
Constraints
.
1 t 103
1 N, Q 105
1 Xi, Yi N, (Xi Yi)
1 Ai, Bi N
Time Limit:- 2.5s for C++

Input Format
First-line contains a single integer t, the number of test cases.
The first line of each test case contains two integers N, and Q, the number of nodes in the tree, and the number of queries.
Next, each of the N-1 lines contains two space-separated integers Xi and Yi, i.e there is an edge between node Xi and node Yi
Next, each of the Q lines contains two space-separated integers Ai and Bi, i.e the nodes which we have to burn in i-th query.
The sum of N and Q over all test cases doesn't exceed 2*105
Output Format
For each test case, output Q lines- where the i-th line will be the minimum possible number of nodes that will burn in your fire
in i-th query.

Sample Input
1
5 2
2 1
1 3
5 3
3 4
4 5
2 2
Sample Output
3
1

 */
process.stdin.resume();
process.stdin.setEncoding('utf8');
let inputString = "";
let currentLine = 0;
process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});
process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
            return string.trim();
        });
    main();
});
function readLine() {
    return inputString[currentLine++];
}
function dfs(root, par, edge, depth, up, Size) {
    edge[root].forEach(child => {
        if (child != par) {
            depth[child] = depth[root] + 1;
            up[child][0] = root;
            for (let j = 1; j < 20; j++) {
                up[child][j] = up[up[child][j - 1]][j - 1];
            }
            dfs(child, root, edge, depth, up, Size);
            Size[root] += Size[child];
        }
    });
}

function main() {

    let inp = readLine().split("").map((x) => parseInt(x));
    let t = inp[0];
    for (let i = 0; i < t; i++) {
        solve();
    }

}
function dfs(root, par, edge, depth, up, Size) {
    edge[root].forEach(child => {

        if (child != par) {
            depth[child] = depth[root] + 1;
            up[child][0] = root;
            for (let j = 1; j < 20; j++) {
                up[child][j] = up[up[child][j - 1]][j - 1];
            }
            dfs(child, root, edge, depth, up, Size);
            Size[root] += Size[child];
        }

    });
}

function getLca(a, b, depth, up) {
    if (depth[a] < depth[b]) {
        let temp = a;
        a = b;
        b = temp;
    }
    let k = depth[a] - depth[b];
    for (let i = 19; i >= 0; i--) {
        if (k & (1 << i)) {
            a = up[a][i];
        }
    }
    if (a == b) return a;
    for (let i = 19; i >= 0; i--) {
        if (up[a][i] != up[b][i]) {
            a = up[a][i];
            b = up[b][i];
        }
    }
}

    function solve() {
        let inp = readLine().split(" ").map((x) => parseInt(x));
        let n, q;
        n = inp[0];
        q = inp[1];
        let edge = new Array(n + 1);
        let Size = new Array(n + 1).fill(1);
        let depth = new Array(n + 1).fill(0);
        let up = new Array(n + 2);

        for (let i = 0; i < n + 1; i++) {
            edge[i] = [];
        }
        for (let i = 0; i < n + 2; i++) {
            up[i] = new Array(20).fill(0);
        }
        for (let i = 1; i < n; i++) {
            inp = readLine().split(" ").map((x) => parseInt(x));
            let x = inp[0];
            let y = inp[1];
            edge[x].push(y);
            edge[y].push(x);
        }
        dfs(1, 0, edge, depth, up, Size);
        for (let i = 0; i < q; i++) {
            inp = readLine().split(" ").map((x) => parseInt(x));
            let x = inp[0];
            let y = inp[1];
            let lca = getLca(x, y, depth, up);
            console.log(Size[lca]);

        }
    }
