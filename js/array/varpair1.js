var arr=[2,3,4,5]
// var element=15;
// var count=0;
// var upp=arr.length-1,low=0;
// while(low<upp){
//     let curr_sum=arr[low]+arr[upp]
//     //case 1
//     if(element==curr_sum){
//         console.log(`pairs (${arr[low]},${arr[upp]})`);
//         break
//     }
//     //case 2
//     else if(curr_sum<element){
//         low+=1
//     }
//     else if(curr_sum>element){
//         up-=1;
//     }
//     count++
// }
// console.log(count);

var element=50
var low=0,upp=arr.length-1
let count=0
while(low<upp){
    let curr_sum=arr[low]+arr[upp]
    if(element==curr_sum){
        console.log(`pairs are ${arr[low]},${arr[upp]}`);
        break
    }
    else if(curr_sum<element){
        low++
    }
    else if(curr_sum>element){
        upp--
    }
    count++
}
console.log(count);