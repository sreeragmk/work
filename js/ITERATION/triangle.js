
for(let i=1;i<=4;i++){
    let str=" "
    for(let space=1;space<=(4-i);space++){
        str+=" "
    }
    for(let j=1;j<=i;j++){
        str+="* "
    }
    console.log(str);
}
