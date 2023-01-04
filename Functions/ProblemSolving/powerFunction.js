/**
 * Write power function for any positive integer
Hint : Power function F(x^n) = x*x*x…n times; where x is the base and n is the exponent

 */

let power = (num,pow)=>{
    let p = 1;
    for(i=0;i<pow;i++){
        p*= num;
    }
    return p;
};
console.log(power(4,3));