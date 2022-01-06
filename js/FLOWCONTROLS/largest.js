var num1=10;
var num2=20;
// var num3=30;
// var largest=num1>num2?num1:num2
// if(num1>num2){
//     console.log(`largest = ${num1}`);
// }
// else if(num2>num1){
//     console.log(`largest =${num2}`);
// }
// else{
//     console.log("equal");
// }

// console.log(largest);

if((num1>num2)&&(num1>num3)){
    // console.log(`largest is ${num1}`);
    if(num2>num3){
        console.log(`second largest is ${num2}`);
    }
    else{
        console.log(`second largest is ${num3}`);
 
    }
 
}


else if((num2>num1)&&(num2>num3)){
    // console.log(`largest is ${num2}`);
    if(num1>num3){
        console.log(`second lrgst is ${num1}`);
    }
    else{
        console.log(`second largest is ${num3}`);

    }
}
else if ((num3>num1)&&(num3>num2)){
    // console.log(`largest is ${num3}`);
    if(num1>num2){
                console.log(`second largest is ${num1}`);
    }
    else{
        console.log(`second largest is ${num2}`);

    }
}
