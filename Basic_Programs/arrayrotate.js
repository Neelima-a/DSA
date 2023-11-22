//Given an array of N elements and an integer B, rotate the given array towards right B number of times
const rotateArr = (array, k)=>{
    let arrLen = array.length;
    for (let i = 0; i < k; i++) {
        let temp = array[arrLen - 1]; 
        for (let j = arrLen - 1; j > 0; j--) { 
            array[j] = array[j - 1];
        }
        array[0] = temp;
    }
    console.log(array)
}

let arr = [6,0,3,5,1,7,4,9,8,2]; 
rotateArr(arr, 3)
//done