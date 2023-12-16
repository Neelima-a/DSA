// Given char arr
// Calculate the no. of pairs (i, j) such that i < j and arr[i] == 'a' && arr[j] == 'g'
// Note: All chars are in lower case


const calculatePairs = (arr) =>{ //time complexity (n*n)
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if((arr[i] == 'a' && arr[j] == 'g')){
                count++;
            }
        }
    }
    console.log('count:', count);
}

const numberOfPairs = (arr) =>{
    let a_count = 0;
    let totalCount = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'a'){
            a_count ++;
        }
        if(arr[i] == 'g'){
            totalCount = a_count + totalCount;
        }
    }
    console.log('----------->totalCount', totalCount)
}

let arr = ['a', 'd', 'g', 'a', 'g', 'a', 'g', 'f', 'g'];
// calculatePairs(arr);
numberOfPairs(arr);
