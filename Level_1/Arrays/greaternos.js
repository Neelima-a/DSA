function checkGreater(arr){
    let count = 0;
    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[i]){
                count++;
                break;
            }
        }
        console.log(arr[i], arr[j])
    }
    console.log('count' , count);
}

let arr = [2,3,8,6,5,2];
checkGreater(arr);
//not done