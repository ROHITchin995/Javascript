/**
 * Problem Statement
In the deep dense jungles of amazon, there is a village named MiniVilla. It is called so because people living 
there have very little
height.
Antonio and his best friend you went trekking in the jungles of the Amazon. While trekking you and Antonio got 
lost in the jungle and
got captured by MiniVilla villagers. The villagers agreed to leave you if you entertained them. Antonio decided 
to entertain them by playing the following game.
• First, Antonio asked the villagers to arrange themselves in a line. There are N villagers with ith villager 
in the line having height H..
Then he asked the villagers to cover his eyes with a black carpet so he can't see anything.
• Then the game was played in K phases. In each phase :
Antonio asked the villagers to give him a random height h
For the given height h Antonio has to tell the position of the first villager in the line having height of h.
To make the game more interesting the villager whose position Antonio told moved to the front of the line after 
every phase.
You need to help Antonio by giving him the correct answer for every phase.


Input Format
• First line contains two space-separated integers denoting N and K.
• Next line contains N space separated integers denoting the heights of the villagers in the line.
• Next line contains K space separated integers denoting the height given to Antonio in the K,,, phase.
Output Format
• Print the position of the first villager in the line having height of in each phase. If there is no villager of height h, print -1.
Constraints
2<-N<-10³
•1<=K<=10³
• 1<-height of each villager<-50
• 1<=h<=50
Sample Input 1
5 5
2 4 3 1 1
3 2 1 1 5
Sample Output 1
3 2 4 1 -1
 */

process.stdin.resume();
process.stdin.setEncoding('utf8');
let inputString = ""
let currentLine = 0;
process.stdin.on("data", (inputStdin) => {
    inputString + inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString.trim().split("\n").map((string) => { return string.trim(); });
    main();});

    function readLine() {
        return inputString[currentLine++];
    }

    function main() {
        let input = readLine().split(" ").map((x)=> parseInt(x))
        let n = input[0]
        let k = input[1]

        let top = new Array(8);
        let ans = new Array(51);
        let vis = new Array(51).fill(0)

        let curr = []
        input = readLine().split(" ").map((x)=> parseInt(x))

        for (let i = 0; i < n; i++) {
            let a = input[i-1]
            if(vis[a] === 0){
                top[a] = [...curr]
                curr.push(a)
                vis[a] = 1
                ans[a] = i
            }
        }

        input = readLine().split(" ").map((x)=> parseInt(x))
        i = 0;
        while (k--) {
            let t = input[i];
            i++;
            if(vis[t] == 0){
                console.log(-1);
                continue
            }
            console.log(ans[t]);
            ans[t] = 1;

            top[t].forEach(it => {
                top[it].push(t)
                ans[it]++
            });
            top[t] = []

        }
    }