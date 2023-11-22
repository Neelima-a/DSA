// Given array of N elements and Q queries, for each query given L & R. 
// Calculate and print sum of all elements in range L and R.
// L and R must be included. [L,R] ==> [0,2]

const prefixArr = (arr, queries)=>{
    const sumArr = [];
    sumArr[0] = arr[0];
    const finalArr = [];
    for (let i = 1; i < arr.length; i++) {
        sumArr.push(sumArr[i - 1] + arr[i])        
    }
    // console.log('sumarr', sumArr)
    for (let j = 0; j < queries.length; j++) {
        const SIndex = queries[j][0];
        const EIndex = queries[j][1];
        if(SIndex == 0)finalArr.push(sumArr[EIndex])
        else finalArr.push(sumArr[EIndex] - sumArr[SIndex - 1])
        console.log([SIndex,EIndex],'===>', SIndex == 0 ? sumArr[EIndex] : sumArr[EIndex] - sumArr[SIndex - 1])
    }
}

const arrlist = [1,3,5,7,8,4,6,2,9];
const queryArr = [[0,2],[1,4],[3,6],[2,5],[4,8],[5,7]]
prefixArr(arrlist,queryArr)