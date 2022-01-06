var expences=[20000,25000,30000,35000,35000,34000]
// console.log(expences);
// for(i=0;i<expences.length;i++){
//     console.log(expences[i]);
// }

// for(let amount of expences){
//     console.log(amount);
// }


//>25000
// for(let amount of expences){
//     if(amount>25000){
//         console.log(amount);
//     }
// }

//tot

// var sum=0;
// for(let amount of expences){
//     sum+=amount;

// }
// console.log(sum);


//find maximum expences
var max_expences=0
for(let amount of expences){
    if(amount>max_expences){
        max_expences=amount;
    }
}
console.log(`highest is ${max_expences}`);


//min expences
var min_exp=expences[0];
for(let amount of expences){
    if(amount<min_exp){
        min_exp=amount;
    }
}
console.log(min_exp);

//duplicates

var st=new Set();
for(let amount of expences){
    st.add(amount)
}
console.log(st);



///creating a new array without duplicates
var unique=[]
for(let amount of expences){
    if(unique.includes(amount)){

    }
    else{
        unique.push(amount);
    }
}
console.log(unique);

