var arr=[9,6,7,8,3,2]
var op=[]
for(let num of arr){
    // if(num>5){
    //     // console.log(num+1);
    //     op.push(num+1)

    // }
    // else{
    //     // console.log(num-1);
    //     op.push(num-1)
    // }
    num>5?op.push(num+1):op.push(num-1)
}
console.log(op);
