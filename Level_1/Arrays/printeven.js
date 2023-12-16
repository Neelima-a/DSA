// Given array elements and Q queries. For each query given L and R.
// Calculate and print no. of even numbers in given range [L R].
let arr = [2, 4, 3, 7, 9, 8, 6, 3, 4, 9];
let Q = 4;
let L = [4, 3, 2, 0];
let R = [8, 9, 7, 4];

const printEven = (arr, queryLen, L, R) =>{
    let sumArr = [];
    si = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) sumArr.push(si + 1);  
        else sumArr.push(si + 0);
        si = sumArr[i];      
    }
    console.log('---------=========>', sumArr)
    for (let index = 0; index < queryLen; index++) {
        const SIndex = L[index];
        const EIndex = R[index];
        if(SIndex == 0) console.log([L[index], R[index]], '------>', sumArr[EIndex])
        else console.log([L[index], R[index]], '------>', sumArr[EIndex] - sumArr[SIndex - 1])
    }
}
printEven(arr, Q, L, R);