var num1=12;
var num2=24;
var factor=0;
var limit=0;
let count=1;
if(num1>num2){
    limit=num1;
}
else{
    limit=num2;
}


for(let i=1;i<limit;i++){
    if ((num1 % i==0)&&(num2 % i ==0)) {
        factor=i;
        console.log(factor);
    }
    count++
}
console.log("hcf",factor);
console.log(count);