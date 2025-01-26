//given array = [1,4,7,10,8] target = 18, print the index of two numbers

const findTwoSumIndices = (arr, target) => {
    let ans = []
    const map = new Map()
    for(i = 0; i < arr.length; i++){
        let sno = target - arr[i];
        if(map.has(sno)){
            ans[0] = map.get(sno);
            ans[1] = i;
            break;
        }
        map.set(arr[i], i);
    }
    console.log(ans);
}

const SumIndices = (array, target) => {
    const indicesMap = {};
    let result = [];
    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i]; // 11 - [1, 3, 7, 10,8] = 10, 8, 4, 1, 3

        if (complement in indicesMap) {
            result.push([indicesMap[complement], i])
        }
        indicesMap[array[i]] = i; // 1 : 0, 3 : 1, ....
        console.log(indicesMap)
    }

    return result;  // Return null if no pair is found
}

let arr = [1,3,7,10,8];
findTwoSumIndices(arr, 17)
console.log(SumIndices(arr, 11))

