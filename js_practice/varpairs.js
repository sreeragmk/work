var arr=[3,5,6,8]
// let element=14;
// let flag=0
// var count=0
// //{3,5}
// for(let i of arr){
//     for(let j of arr){
//         if(i+j==element){
//             console.log(`the pairs are ${i},${j}`);
//             flag=1
//         }
//         count ++
//     }
// }

// console.log(flag==1?"f":"nf");
// console.log(count);
let element=141;
var low=0,upp=arr.length-1;
var count=0
var flag=0
while(low<upp){
    //case1
    if(element==(arr[low]+arr[upp])){
        console.log(`pairs are ${arr[low]},${arr[upp]}`);
        flag=1
        break
    }
    else if(element>(arr[low]+arr[upp])){
        low++
    }
    else if(element<(arr[low]+arr[upp])){
    upp--
    }
    count++
}
console.log(count);
console.log(flag==0?"nf":"f");