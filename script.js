// let n=5;
// let result=1;

// function factorial(n,result){
//     if(n===1){
//         result *=n;
//         return result;
//     }
//     result*=n;
//     return factorial(n-1,result);
// }

// console.log(factorial(5,result));



let n1=0;
let n2=1;
let nth=6;

function fibonacchi(n1,n2,nth){
    if (nth>0){
        console.log(n1);
        return fibonacchi(n2,n1+n2,nth-1);
    }
    

}

fibonacchi(n1,n2,nth);