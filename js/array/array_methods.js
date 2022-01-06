var arr=[2,3,4,5,6,7]
var square=arr.map(num=>num**2)
console.log(square);
var add_two=arr.map(num=>num+2)
console.log(add_two);
var names=["ram","revi","sonu"]
var upp=names.map(name=>name.toUpperCase())
console.log(upp);

var even=arr.filter(num=>num%2==0)
console.log(even);

var names=["abhi","akhi","sanu","Abhilash","pranu"]
var anames=names.filter(name=>name[0]=="a" || name[0]=="A")
console.log(anames);

var arr =[2,3,4,5,6,7]
// var square=arr.map(num=>num**2)
// console.log(square);
// var add_two=arr.map(num=>num+2)
// console.log(add_two);
// var names=["ram","ravi","sonu"]
// var upp=names.map(nam=>nam.toUpperCase())
// console.log(upp);


// var even=arr.filter(num=>num%2==0)
// console.log(even);
// var names=["appu","ammu","amal","subi","femi","dri","Abhi"]
// var anames=names.filter(nam=>nam[0]=="a" || nam[0]=="A")
// console.log(anames);


var arr=[2,3,4,5,6,7]
var sum=arr.reduce((n1,n2)=>n1+n2)
console.log(sum);
var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);
var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min);