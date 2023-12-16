function checkPrime(number){
    let isTrue = true;
    if(number > 1){
        for(var i = 2; i * i <= number; i++ ){
            if (number % i === 0){
                isTrue = false;
            }
        }
    }
    if(isTrue){
        console.log(`${number} is prime`)
    }else{
        console.log(`${number} is not prime`)
    }
}

checkPrime(88)

//done