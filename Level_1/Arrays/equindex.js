// Given array of N elements, count no. of equilibrium index.
// An index i is known as eui index when sum of left values is equals to right values
// let arr = [-7, 1, 5, 2, -4, 3, 0];

const equindex = (arr) => {
    let sumArr = []
    sumArr[0] = arr[0];
    const equilibriumArr = [];
    for (let i = 1; i < arr.length; i++) {
        sumArr.push(sumArr[i - 1] + arr[i])
    }
    const n = sumArr.length
    for (let j = 0; j < sumArr.length; j++) {
        let leftSum = 0;
        let rightSum = 0;
        rightSum = sumArr[n - 1] - sumArr[j]
        if(j != 0) sumArr[j - 1];
        if(leftSum == rightSum) equilibriumArr.push(j)
        console.log('j',j, 'leftSum',leftSum, 'rightSum',rightSum)
    }
    console.log('------',equilibriumArr)
}

let arr = [-7, 1, 5, 2, -4, 3, 0];
equindex(arr)