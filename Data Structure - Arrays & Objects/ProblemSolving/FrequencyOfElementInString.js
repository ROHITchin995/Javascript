/**
 * Frequency – The frequency of an element in the string is defined as the number of times that element is present
in the string
Approach 1 – We can traverse string characters one by one and check if a given character is equal to that
character. If it is matching, we can increase our count.

 */

function count(s, c)
{
    let output = 0;

    for (let i = 0; i < s.length; i++)
    {
        if (s.charAt(i) == c)
        output++;
    }
    return output;
}

// Driver method
    let str= "unacademy";
    let c = 'a';
    console.log("Frequency of Character " + c + " is " +count(str, c));

/**
 * Approach 2 – We can also use recursion to find the frequency
 */


function countOccurence( ch, s)
{
    if (s.length == 0)
        return 0;
    var count = 0;

    if (s[0] == ch)
        count++;

    count += countOccurence(ch, s.substring(1));

    return count;
}

    var str2 = "unacademy";
    var c2 = 'a';
    console.log("Frequency of Character " + c + " is " +countOccurence(c, str));

