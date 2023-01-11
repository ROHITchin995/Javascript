const countSort = (givenArray, decimal) => {
    let frequency = new Array(10).fill(0);
  
    for (let i = 0; i < givenArray.length; i++)
        frequency[Math.floor((givenArray[i] / decimal) % 10)]++;
 
     for (let i = 1; i < 10; i++)
        frequency[i] += frequency[i - 1];
 
    
    resultArray = new Array(givenArray.length).fill(0);
     for (let i = givenArray.length - 1; i >= 0; i--) {
        resultArray[frequency[Math.floor((givenArray[i] / decimal) % 10)] - 1] = givenArray[i];
        frequency[Math.floor((givenArray[i] / decimal) % 10)]--;
    }
   
     for (let i = 0; i < givenArray.length; i++)
        givenArray[i] = resultArray[i];
 
      
 }
  
 const radixsort = (givenArray) => {
    let maxElement = Math.max(...givenArray);
   
    for (let decimal = 1; Math.floor(maxElement / decimal) > 0; decimal *= 10){
        countSort(givenArray, decimal);
    }
 }
 
 const radixsortUtil = (arr,n) =>{
     let Neg = [];
     let Pos = [];
     
     for (let i = 0; i < n; i++)
     {
         if (arr[i] < 0)
     
         Neg.push(-1 * arr[i]) ;
         else
     
         Pos.push(arr[i]) ;
     }
     radixsort(Neg);
     radixsort(Pos);
     for (let i = 0; i < Neg.length; i++)
         arr[i] = -1 * Neg[ Neg.length -1 - i];
     
     
     for(let j = Neg.length; j < n; j++)
         arr[j] = Pos[j - Neg.length];
 }   
  
 let givenArray = [-123, - 432, -111, -999, 129, 431, 234, 653, 232, 824, 2, 921, 54];
  
 radixsortUtil(givenArray, givenArray.length);
  
 console.log("Result");
 console.log(givenArray);