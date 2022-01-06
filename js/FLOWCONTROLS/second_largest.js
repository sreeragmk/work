var num1 = 10000;
var num2 = 5000;
var num3 = 20000;
if ((num1 > num2) && (num1 > num3)) {
    if (num2 > num3) {
        console.log(`second largest is ${num2}`);
        console.log(num1,num2,num3);

    }
    else {
        console.log(`second largest is ${num3}`);
        console.log(num1,num3,num2);

    }
    // console.log(`largest is ${num1}`);
}
else if ((num2 > num1) && (num2 > num3)) {
    if (num1 > num3) {
        console.log(`second largest is ${num1}`);
        console.log(num2,num1,num3);
    }
    else {
        console.log(`second largest is ${num3}`);
        console.log(num2,num3,num1);

    }

}                                            // console.log(`largest is ${num2}`);

else if ((num3 > num1) && (num3 > num2)) {
    if(num1>num2){
        console.log(`second largest is ${num1}`);
        console.log(num3,num1,num2);


    }
    else{
        console.log(`second largest is ${num2}`);
        console.log(num3,num2,num1);

    }
    // console.log(`largest is ${num3}`);
}