// given N, count no of factors of N
function factorsCount(N){
    let FCount = 0;
    for (let i = 0; i * i <= N; i++) {
        if(N % i == 0){
            if(i * i == N) FCount += 1;
            else FCount += 2
        }
    }
    return FCount;
}



function countFactors(N){
    let count = 0;
    for (let i = 0; i <= N; i++) {
        if(i % N == 0){
            count = count + 1;
        }
    }
    return count;
}
// console.log(countFactors(25));
console.log(factorsCount(25));
