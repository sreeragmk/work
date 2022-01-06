let num=789;
let str="";
while(num!=0){
    let ll=num%10;
    str+=ll
    num=Math.floor(num/10)
}
console.log(str);