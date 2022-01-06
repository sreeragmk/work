var expences=[2000,3000,4000,4000,3500]
// console.log(expences);
// console.log(expences[0]);
var st=new Set();
for(let amount of expences){
    st.add(amount)
}
console.log(st);

for(i=0;i<expences.length;i++){
    // console.log(expences[i]);
}

for(let amount of expences){
    // console.log(amount);
}

//>2500
for(let amount of expences){
    if(amount>2500){
        console.log(amount);
    }
}

//tot
let sum=0;
for(let amount of expences){
    sum+=amount;
}
console.log(sum);

//max exp
let max_expences=0;
for(let amount of expences){
    if(amount>max_expences){
        max_expences=amount;
    }
}
console.log(max_expences);

//min_exp
let min_exp=expences[0]
for(let amount of expences){
    if(amount<min_exp){
        min_exp=amount
    }
}
console.log(min_exp);

//new
let unique=[];
for(let amount of expences){
    if(unique.includes(amount)){

    }
    else{
        unique.push(amount)
    }
}
console.log(unique);
