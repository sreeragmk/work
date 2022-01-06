var arr=[10,9,13,15,7,6]
// arr.sort((i,j)=>i-j)
// console.log(arr);
var element=100;
var flag=0;
for(let num of arr){
    if(element==num){
        flag=1;
        break
    }
    
}
console.log(flag==0?"not found":"found");

arr.sort((i,j)=>i-j)
console.log(arr);