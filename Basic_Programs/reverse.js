function printReverse(arr){
    for (var i = 0; i <= (arr.length/2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log('reverse array',arr);
}


let arr = 'tring2'
// [9,0,3,5,1,7,4];
printReverse(arr);
function reverseString(str) {
    // Step 1. Create an empty string that will host the new created string
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
    return newString;
}
//done
