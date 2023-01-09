/**
 * Anagram – An anagram of a string is a string that contains the same characters but the order can be different.
Problem – Given an array of strings. You need to print all anagrams together. For example –
Input – {“data”, “atad”, “number”, “tada”, “adat”, “bernum”}
Output – {“data”, “atad”, “tada”, “adat”, “number”, “bernum”}

 */

/**
 * Approach 1
1) Create 2 arrays – index array and word array. Populate word array with input array and index array with respective index.
index[]–> 0 1 2 3 4 5
word[] -> “data” “atad” “number” “tada” “adat” “bernum”
2) Now, sort each string in a word array
 index[]–> 0 1 2 3 4 5
 word[] -> “aadt” “aadt” “bemnru” “aadt” “aadt” “bemnru”
DSA- Class 8 #180DaysofPurpose
3) Now, sort word array and move respective index as well in index array
index[]–> 0 1 3 4 2 5
word[] -> “aadt” “aadt” “aadt” “aadt” “bemnru” “bemnru”
4) Print final output array using index array
{“data”, “atad”, “tada”, “adat”, “number”, “bernum”}

 */


class WordArray
{		
    index = 0;		
    constructor(str, index)
    {
        this.str = str;
        this.index = index;
    }
}
class IndexArray
{
    array = [];
    size = 0;
    
    constructor(str, size)
    {
        this.size = size;
        this.array = Array(size).fill(null);
        var i = 0;
        for (i = 0; i < size; ++i)
        {
            this.array[i] = new WordArray(str[i], i);
        }
    }
}

function printAnagrams(inputArr, size)
{
    var indexArray = new IndexArray(inputArr, size);
const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');
    
    var i = 0;
    for (i = 0; i < size; ++i)
    {
  indexArray.array[i].str = sort(indexArray.array[i].str);
}

indexArray.array.sort((a, b) => a.str.localeCompare(b.str))
 
    for (i = 0; i < size; ++i)
    {
        console.log(inputArr[indexArray.array[i].index] + " ");
    }
}

 
    var inputArr = ["data", "atad", "number", "tada", "adat", "bernum"];
    var size = inputArr.length;
    printAnagrams(inputArr, size);

/**
 * Approach 2
We will sort each string individually and then put a sorted string as key and all the words having sorted value similar to key as a
value.
Input array -> {“data”, “atad”, “number”, “tada”, “adat”, “bernum”}
Map –> Key Value
 “aadt” {“data”, “atad”, “tada”, “adat”}
 “bemnru” {“number”, “bernum”}
 */

 class Anagrams
{
	static
	printAnagrams(arr)
	{
		var map = new Map();
		
		for (var i = 0; i < arr.length; i++)
		{
			var word = arr[i];
      const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');
      var sortedWord = sort(word);
			
			if (map.has(sortedWord))
			{
				(map.get(sortedWord).push(word) > 0);
			}
			else
			{
			
				var words = new Array();
				(words.push(word) > 0);
				map.set(sortedWord, words);
			}
		}
	
		for (const s of map.keys())
		{
			var values = map.get(s);
      
			if (values.length > 1)
			{
				document.write(values);
        document.write(",");
			}
		}
	}
	static
	main(args)
	{
		// Driver program
		var arr = ["data", "atad", "number", "tada", "adat", "bernum"];
		Anagrams.printAnagrams(arr);
	}
}
Anagrams.main([]);


/**
 * Problem 2
Given two strings. You need to find if they are anagrams of each other. For example –
Input – “silent”, “listen”
Output – Two strings are anagrams of each otherApproach – We can use one count array. Our major step will be to increment the value for characters in str1 and decrement the
value for characters in str2. If all the count values in the count array will be 0, it means that the two strings are anagrams of each
other.

 */



function verifyAnagram(str1, str2)
{

  let NO_OF_CHARS = 256;
	let countArray = new Array(NO_OF_CHARS);
	for(let i = 0; i < NO_OF_CHARS; i++)
	{
		countArray[i] = 0;
	}
	let i;
	for(i = 0; i < str1.length; i++)
	{
		countArray[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
		countArray[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
	}


	if (str1.length != str2.length)
		return false;

	for(i = 0; i < NO_OF_CHARS; i++)
		if (countArray[i] != 0)
		{
			return false;
		}
	return true;
}


let str1 = "unacademy".split("");
let str2 = "academyun".split("");

if (verifyAnagram(str1, str2))
	console.log("Two strings are " +
				"anagram of each other");
else
	console.log("Two strings are " +
				"not anagram of each other");
