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



// let str='aba';

// function palindrome(index,arr){
//     if (index>=arr.length-index-1){
//         return 'Yes the string is palindrome';
//     }
//     if (arr[index]!=arr[arr.length-index-1]){
//         return 'No the string is not palindrome';
//     }

//     return palindrome(index+1,arr);
// }

// console.log(palindrome(0,str.split("")));





// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,,16];
// let target=0;

// function binarySearch(arr,lowIn,upIn,target){

//     if(upIn<lowIn){
//         return 'not found';
//     }
//     let mid=Math.floor((lowIn+upIn)/2); 
//     if(arr[mid]===target){
//         return mid;
//     }
//     if(arr[mid]>target){
        
//         return binarySearch(arr,lowIn,mid-1,target);
//     }
//     return binarySearch(arr,mid+1,upIn,target);
// }

// console.log(binarySearch(arr,0,arr.length-1,target));

let arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function count(arr, index, cnt, target) {
    if (index >= arr.length) {
        return cnt;
    }
    if (arr[index] === target) {
        cnt++;
    }
    return count(arr, index + 1, cnt, target);
}


console.log(count(arr,0,0,5));