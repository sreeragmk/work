var arr1=[10,11,20,21]
var arr2=[11,12,20,21]
// for(let i of arr1){
//     for(let j of arr2){
//         if(i==j){
//             console.log("common element",i);
//         }
//     }
// }

let p1=0,p2=0;
var count=0;
while(p1<arr1.length && p2<arr2.length){
    if(arr1[p1]==arr2[p2]){
        console.log("common element",arr1[p1]);
        p1++;
        p2++;
    }
    else if(arr1[p1]>arr2[p2]){
        p2++;
    }
    else if(arr1[p1]<arr2[p2]){
        p1++;
    }
    count++;
}
console.log(count);