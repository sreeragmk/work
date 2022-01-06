var pattern="ABACC"
var op=[];
for(let pp of pattern){
if(op.includes(pp)){
    console.log("recursive elementsare",pp);
}
else{
    op.push(pp)
}
}
console.log(op);