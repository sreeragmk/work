var arr=[2,3,4,5]
// var sum=7;
// var count=0
// var flag=0;
// //{2,5}
// for(let i of arr){
//     for(let j of arr){
//         if(i+j==sum){
//             console.log(`pairs are (${i} , ${j})`);
//             flag=1;
//         }
//         count++
        
//     }
    
   
// }
// if(flag==0){
//     console.log("no pairs found");}
//     console.log(count);
var element=90
let count=0
var low=0,upp=arr.length-1
while(low < upp){//0<3
    let curr_sum=arr[low]+arr[upp] //2+5 //3+5
    if(element==curr_sum){
        console.log(`pairs are ${arr[low]},${arr[upp]}`);
        break
    }
    else if(curr_sum<element){
        low++
    }
    else if(curr_sum>element){//7>6
        upp--
    }
    count++
}
console.log(count);


