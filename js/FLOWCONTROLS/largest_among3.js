var num1=100;
var num2=50;
var num3=400;
// console.log(num1>num2?num1:num2);
if((num1>num2)&&(num1>num3)){
    console.log(`largest is ${num1}`);
}
else if ((num2>num1)&&(num2>num3)){
    console.log(`largest is ${num2}`);
}
else if((num3>num1)&&(num3>num2)){
    console.log(`${num3} is largest`);
}