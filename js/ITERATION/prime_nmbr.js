var num=8;
//2...3
var flag=0;
for(let i=2;i<num;i++){
    if (num % i==0) {
        flag=1;
        break;
        
    }
}
if (flag==0) {
    console.log("prime");
}
else{
    console.log("not prime");
}



//2
//2...24
var num=24;
var flag=0;
for(let i=2;i<num;i++){
    if (num % i ==0) {
        flag=1;
        break;
        
    }
}
if (flag==0) {
    console.log("prime");
}
else{
    console.log("not prime");
}