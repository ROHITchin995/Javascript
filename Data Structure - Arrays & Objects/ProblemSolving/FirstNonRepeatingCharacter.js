/**
 * Non-repeating – A character is known as a non-repeating character when its frequency is unit in a given string
 * Approach – We can use HashMap and frequency concept. We can insert characters as keys in the map and their
respective frequencies as values. 
Steps –
1) Create a map having a character as key and frequency as value
2) Iterate the given string and check whether a given character has a unit frequency.
3) If yes, print given character as output

 */

	
	
	
function charCountArray(str,count)
{

    for (var i = 0; i < str.length; i++)
    {
        count[str.charAt(i).charCodeAt(0)]++;
    }
return count;
}


function firstNonRepeating(str,count)
{
    count = charCountArray(str,count);
    var output = -1;
    var i = 0;
    for (i = 0; i < str.length; i++)
    {
        if (count[str.charAt(i).charCodeAt(0)] == 1)
        {
            output = i;
            break;
        }
    }
    return output;
}


TOTAL_CHARS = 256;
 count = Array(TOTAL_CHARS).fill(' ');
    var str = "unacademy";
    var index = firstNonRepeating(str,count);
    console.log(index == -1 ? "Either all characters are repeating or string is empty" : "First non-repeating character is " + str.charAt(index));

