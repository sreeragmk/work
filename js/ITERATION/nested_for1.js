// *
// **
// ***
// ****

for(i=1;i<=4;i++){
    let str="";
    for(j=1;j<=i;j++){    //
    str+="j";
    }
    // console.log(str);
}

for(i=1;i<=4;i++){
    let str="";
    for(j=1;j<=i;j++){
        str+="*";
    }
    // console.log(str);
}

for(i=1;i<=4;i++){
    let str="";
    for(j=1;j<=i;j++){
        str+=j;
    }
    // console.log(str);
}
for(i=1;i<=6;i++){                                             //1 1<=6
    let str="";                          // 
    for(j=1;j<=i;j++){                         //1 1<=1
        // if(i==4||i+j==5||j-i==3)  {               //
            // str+=" * ";
            if(i==6||i+j==7||j-i==1){
                str+=" * ";
   
            }
        // }              //like a triangle
       
    }
    console.log(str);
}

for(i=1;i<=6;i++){
    let str="";
    for(j=1;j<=2;j++){
        str+="*";
    }
    // console.log(str);
}



