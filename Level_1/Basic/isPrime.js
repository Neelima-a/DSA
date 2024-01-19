function isPrime(A) {
    let count = 0;
    for (let i = 1; i <= A; i++) {
        if(A % i == 0){
            if(i * i == A) count += 1;
            else count += 2;
        }
    }
    if(count == 2) return 1;
    return 0;
}

console.log('isPrime', isPrime(19))