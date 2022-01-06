// var num=123;

// var res=0;
// while(num!=0){
// let last_dig=num % 10;
// last_dig**last_dig
// res+=last_dig**3
// num=Math.floor(num/10)
// }
// console.log(res);



var num=123;
var sum=0;
while(num!=0){
    let digit=num % 10;        //3
    sum+=digit**3;           //sum=27 + 8 + 1
    num=Math.floor(num/10)    //12 
}
console.log(sum);