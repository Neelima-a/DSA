const querySum = (arr, query)=>{
    for (let i = 0; i < query.length; i++) {
        let sum  = 0;
        const s = query[i][0];
        const e = query[i][1];
        for (let j = s; j <= e; j++) {
            sum += arr[j]
        }
        console.log('sum',sum)
    }
}

let arr = [2,3,6,8,9]
let query = [[0,3],[1,4]]
querySum(arr,query)