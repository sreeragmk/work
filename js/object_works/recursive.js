//ABABBC
var pattern="ABABBC"
var wc={}
//  for(let char of pattern){
//      if(char in wc){
//          console.log("first recursive cheracter is",char);
//         break;
//      }
//      else{
//          wc[char]=1
//      }
//  }
//  console.log(wc);

var op=[]
pattern.split("").map(char=>char in wc ?op.push(char):wc[char]=1)
console.log(op[0]);
