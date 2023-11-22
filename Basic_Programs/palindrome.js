//Palindrome Number
//An integer is a palindrome when it reads the same forward and backward.

//input : 121 ----->>>> output: true
//input : 1213 ----->>>> output: false

const isPalindrome = (x)=>{
    return x<0 ? false : x === +x.toString().split('').reverse().join('');
}

    // 121 ==>> '121'
    // '121' ==> ['1','2','1']
    //['1','2','1'] ==> ['1','2','1'] ==>> '121'
    const res = isPalindrome(101)
    console.log(res)