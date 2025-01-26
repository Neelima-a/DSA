//Given an array [], return second largest distinct element from an array. If the second largest element doesn't exist 
// return -1
//[1, 12, 36, 38, 20, 15] //36

const secondLargest = (arr) =>{

    if(arr.length < 2) return -1

    let largest = - Infinity
    let secondLargest = - Infinity

    for(let num of arr){
        if(num > largest){ //1 > infinity, 12 > 1, 36 > 12,38> 36, 20>38-false
            secondLargest = largest // 1, 12, 36
            largest = num // 1, 12, 36, 38
        }else if( num > secondLargest  && num < largest){ // 20 > 36 - false && 20 < 38 - true
            secondLargest = num
        }
    }
    return secondLargest === -Infinity ? -1 :  secondLargest
}

console.log(secondLargest([1, 12, 36, 38, 20, 15]))