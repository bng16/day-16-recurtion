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



// let n1=0;
// let n2=1;
// let nth=6;

// function fibonacchi(n1,n2,nth){
//     if (nth>0){
//         console.log(n1);
//         return fibonacchi(n2,n1+n2,nth-1);
//     }
    

// }

// fibonacchi(n1,n2,nth);





// let arr=[1,2,3,4,5,6,7,8,9,10];
// function summ(index,sum,arr){
//     if(index>arr.length-1){
//         return sum;
//     }
//     sum+=arr[index];
//     return summ(index+1,sum,arr);
// }

// console.log(summ(0,0,arr));



// let arr=[1,2,3,4,55,6,7,8,9,10];
// function maxx(index,max,arr){
//     if(index>arr.length-1){
//         return max;
//     }
    
//     if(arr[index]>max){
//         max=arr[index];
//     }
//     return maxx(index+1,max,arr);
    
// }

// console.log(maxx(0,0,arr));





// let str='Biswajit';

// function swap(index,arr){
//     if (index>=arr.length-index-1){
//         return arr.join('');
//     }

//     let temp=arr[index];
//     arr[index]=arr[arr.length-index-1];
//     arr[arr.length-index-1]=temp;
//     return swap(index+1,arr);
// }

// console.log(swap(0,str.split("")));



let str='aba';

function palindrome(index,arr){
    if (index>=arr.length-index-1){
        return 'Yes the string is palindrome';
    }
    if (arr[index]!=arr[arr.length-index-1]){
        return 'No the string is not palindrome';
    }

    return palindrome(index+1,arr);
}

console.log(palindrome(0,str.split("")));