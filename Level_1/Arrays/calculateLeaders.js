// Given an arr, calculate the no. of leaders.
// An element is a leader if i is strictly greater than all the elements on R.H.S

const noOfLeaders = (arr, n) => {
    let leaders = [];
    let maxRightEle = arr[n - 1];
    leaders.push(maxRightEle);
    for (let i = n- 2; i >= 0; i--) {
        console.log(arr[i], maxRightEle)
        if(maxRightEle < arr[i]){
            maxRightEle = arr[i];
            leaders.push(maxRightEle);
        }
    }
    console.log('leaders', leaders);
}

let arr = [3, 5, 86, 6, 5, 34, 56, 7, 64, 43, 24];
noOfLeaders(arr, arr.length);