//Given an array A and an integer B. A pair(i, j) in the array is a good pair 
//if i != j and (A[i] + A[j] == B). Check if any good pair exist or not.

const countPairs = (A, N, K) =>{
    let pairs = []
    for (let i = 0; i < N; i++) {
        for (let j = 0; j > i; j++) {   
            console.log('i,j', i, j)
            // if(A[i] + A[j] == K) 
            // return true;
            // pairs.push({i:A[i],j:A[j]})
        }       
    }
    return false;
}

let A = [3, 4, 6, 7, 0]
console.log(countPairs(A, A.length, 10))