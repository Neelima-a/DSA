// Given arr, count the no. of elements having atleast one element greater than itself 
const countGreaterNo = (A, n) =>{ //using two loops
    let maxNo = A[0];
    for (let i = 1; i < n; i++) {
        if(A[i] > maxNo) maxNo = A[i];
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
        if(maxNo == A[i]) count++;
    }
    return n - count;
}

let A = [3, 2, 6, 8, 9, 7, 9, 5, 4]
console.log(countGreaterNo(A, A.length))
//time Complexity - O(n) 
//space Complexity - O(1)