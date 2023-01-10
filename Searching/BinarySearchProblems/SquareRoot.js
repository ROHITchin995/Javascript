/**
 * Given a positive number n and precision p, 
 * find the square root of the number upto decimal places using binary search. 
 * Approach
1. Because the square root of an integer is in the range 0 <= squareRoot <= number, set start and end to 0 and number,
respectively.
2. Compare the given number to the square of the mid integer. The square root is found if it equals the number.
Otherwise, depending on the situation, seek the same in the left or right side.
3. Begin computing the fractional portion once the integral part has been found.
4. Set the increment variable to 0.1 and compute the fractional component up to P places iteratively. Each iteration
reduces the increment to 1/10th of its previous value.
5. Finally, return the computed result.

 */

// JavaScript program implementation to find
// square root of given number
// upto given precision using
// binary search.
 
    // Function to find square root
    // of given number upto given
    // precision
    function squareRoot(number, precision)
    {
        let start = 0, end = number;
        let mid;
   
        // variable to store the answer
        let ans = 0.0;
   
        // for computing integral part
        // of square root of number
        while (start <= end)
        {
            mid = (start + end) / 2;
               
            if (mid * mid == number)
            {
                ans = mid;
                break;
            }
   
            // incrementing start if integral
            // part lies on right side of the mid
            if (mid * mid < number) {
                start = mid + 1;
                ans = mid;
            }
   
            // decrementing end if integral part
            // lies on the left side of the mid
            else {
                end = mid - 1;
            }
        }
   
        // For computing the fractional part
        // of square root upto given precision
        let increment = 0.1;
        for (let i = 0; i < precision; i++) {
            while (ans * ans <= number) {
                ans += increment;
            }
   
            // loop terminates when ans * ans > number
            ans = ans - increment;
            increment = increment / 10;
        }
        return ans;
    }