var num1=100;
var num2=200;
// console.log(smtsub(num1,num2));          //hoisting
// function smtsub(num1,num2){
//     return num1>num2?num1-num2:num2-num1
// }
// console.log(smtsub(num1,num2));



// function smart_sub(num1,num2){
//     if(num1>num2){
//         return num1-num2
//     }
//     else{
//         return num2-num1
//     }
// }
// console.log(smart_sub(num1,num2));

function smart_sub(num1,num2){
    return num1>num2?num1-num2:num2-num1
}
console.log(smart_sub(num1,num2));