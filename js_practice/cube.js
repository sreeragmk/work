//1^3,2^3,3^3
var num1=123
let str=0
var pp=0;
while(num1!=0){
     str=num1%10;
     pp+=str**3;
     
    num1=Math.floor(num1/10)
}
console.log(pp);