function factors(n){
    let count = 0
    for(var i = 1; i*i <= n; i++){
        if(i*i === n){
            count = count + 1;
        }else if (n % i === 0){
            count = count +2;
        }
    } 
    // return count;
  console.log('factor count', count);
}

console.log(factors(25));

//done