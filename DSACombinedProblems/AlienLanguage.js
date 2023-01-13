/**
 * Alien Language
Aliens started their journey towards our earth. They somehow mastered our English language through a dictionary.
 However, they wanted a new language hence they shoveled our English alphabets "abcdefghijklmnopqrstuvwxyz".
Now they want us to learn their new language which is basically English but characters are shoveled now.

Problem Statement
To test whether you were able to understand their language they have a test for you, you are given Q words you need to
 sort them by following the new lexicographical ordering which the aliens gave and not the English we know.
Example: S="bacdefghijklmnopqrstuvwxyz", Q=3
["aa","ba","bb"]
The lexicographical ordering will be: ["bb","ba","aa"]
As in the new ordering "b" comes before "a".

INPUT:
First-line contains integer T denoting the number of test cases.
First line of each test case gives a string S of 26 characters denoting the new ordering.
Second line of the test case contains a single integer Q number of words.
Next Q line follows one word of lowercase latin characters.
OUTPUT:
For each test case output Q lines each line containing one word in lexicographical order.
Constrains:
1<= T<=1000
1<= Q<=100
1<= IWORD| <=50

 */

function AlienLanguage(lang, arr){
    const langArr = lang.split('');
    let langObj = {};
    const letterToNum = []
    const unSortedObj = {}
    const sortedArr = [] 
    langArr.map((item, index)=>langObj[item]= (index + 1))


    arr.map(item=>{
        let num = '';
        item.split('').map(letr =>{
            num += langObj[letr]
        })
        letterToNum.push(parseInt(num))
        unSortedObj[parseInt(num)] = item
    })
   letterToNum.sort((a,b)=> a-b)
   letterToNum.map(item =>{
    sortedArr.push(unSortedObj[item])
   })
   return sortedArr
}

console.log(AlienLanguage("bacdefghijklmnopqrstuvwxyz",["bb","ab","aa"]));