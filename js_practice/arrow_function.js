var sum=(num1,num2)=>num1+num2
console.log(sum(2,3));
var mul=num1=>num1**2
console.log(mul(10));
//larg
var large=(num1,num2)=>num1>num2?num1:num2
console.log(large(400,40));
var smtsub=(num1,num2)=>num1>num2?num1-num2:num2-num1
console.log(smtsub(30,4));
//even
let even=(num1)=>num1%2==0?"even":"odd"
console.log(even(4));
//strats with A
let nameA=name=>name[0]=="a"||name[0]=="A"?"yess":"noo";
console.log(nameA("Asreerag"));
//phone
var phone=phone=>phone.length==10?"validate":"not validate"
console.log(phone("8157948665"));