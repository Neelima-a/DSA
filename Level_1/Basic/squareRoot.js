function squareRoot(A) {
    let sum = 0, i = 1;
    while( i * i <= A){
        sum += 1;
        i++;
    }
    return i;
}

console.log(squareRoot(25));