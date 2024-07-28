let n=5;
let result=1;

function factorial(n,result){
    if(n===1){
        result *=n;
        return result;
    }
    result*=n;
    return factorial(n-1,result);
}

console.log(factorial(5,result));