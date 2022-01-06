var text="hello hai hello hai"
var wc={}
// var words=text.split(" ")
// for(let word of words){
//     if(word in wc){
//         wc[word]+=1
//     }
//     else{
//         wc[word]=1
//     }
// }
// console.log(wc);
text.split(" ").map(word=>word in wc?wc[word]+=1 : wc[word]=1)
console.log(wc);


//ABAAC
var text="A B A A C"
var wc={}
text .split(" ").map(word=>word in wc?wc[word]+=1 : wc[word]=1)
console.log(wc);
// var  words=text.split(" ")
// console.log(words);
// for(let word of words){
//     if(word in wc){
//         wc[word]+=1
//     }
//     else{
//         wc[word]=1
//     }
// }
// console.log(wc);