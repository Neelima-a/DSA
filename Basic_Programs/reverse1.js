function reverseArr(arr, start, end){
    for (var i = start; i <= end; i++) {
        let temp = arr[i];
        arr[i] = arr[end];
        arr[end] = temp;
        end --;
    }
    console.log(arr)
}

let arr = [6,0,3,5,1,7,4,9,8,2];
reverseArr(arr, 1, 7)
//done