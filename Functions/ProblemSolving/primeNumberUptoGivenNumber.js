//Print all the prime number up to a given number value

let isPrime = num=>{
        for(let i=2; i<num; i++){
            if(num%i == 0){
                return false;
            }
        }
        return true;    
    }
    let n=30;
    for(let i=2; i<n; i++){
        if(isPrime(i) == true){
            console.log(i);
        }
    }