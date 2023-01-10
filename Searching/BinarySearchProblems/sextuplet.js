// https://www.spoj.com/problems/ABCDEF/

/**
 * Intuition – Since mathematical expression is provided in the question, we can reorder the expression. Now we will
be having the Left Hand side and Right Hand side in the equation. We can consider different arrays and check if
any number is common in both the arrays.
Approach – Let’s see each step –
1. Create two arrays LHSArray for LHS side and RHSArray for RHS
2. Verify if any value from RHSValue is present in LHSArray
3. If value is present in LHSArray, increase the final count.

 */


function upper_bound(array , length , value)
{
		var low = 0;
		var high = length;
		while (low < high) {
			var mid = parseInt((low + high) / 2);
			if (value >= array[mid]) {
				low = mid + 1;
			} else {
				high = mid;
			}
		}
		return low;
	}
function lower_bound(array , length , value)
{
		var low = 0;
		var high = length;
		while (low < high) {
			var mid = parseInt((low + high) / 2);
			if (value <= array[mid]) {
				high = mid;
			} else {
				low = mid + 1;
			}
		}
		return low;
	}
function findSextuplets(arr , n)
{
	// Generating possible values of
	// RHS of the equation
	var index = 0;
	var RHS = Array.from({length: n * n * n + 1},
	(_, i) => 0);
	for (i = 0; i < n; i++)
	{
	// Checking d should be non-zero.
	if (arr[i] != 0)
	{
		for (j = 0; j < n; j++)
		{
		for (k = 0; k < n; k++)
		{
			RHS[index++] = arr[i] *
			(arr[j] + arr[k]);
		}
		}
	}
	}

	RHS.sort((a,b)=>a-b);

	
	var result = 0;
	for (i = 0; i < n; i++)
	{
		for (j = 0; j < n; j++)
		{
			for (k = 0; k < n; k++)
			{
				var val = arr[i] * arr[j] + arr[k];
				result += (upper_bound(RHS, index, val)-
				lower_bound(RHS, index, val));
			}
		}
	}

	return result;
}

var arr = [2, 3];
var n = arr.length;
console.log(findSextuplets(arr, n));

