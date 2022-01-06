var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

employees.sort((emp1,emp2)=>emp2[2]-emp1[2])
console.log(employees[0][1]);
console.log(employees[employees.length-1][1]);
console.log(employees[1][1]);




// //costly

// mobiles.sort((m1,m2)=>m2[3]-m1[3])
// // console.log(mobiles[0]);

// //methord 2
// var cost=0
// for(let mob of mobiles){
//     if(mob[3]>cost){
//         cost=mob[3]
//     }
// }
// // console.log(cost);

// //processor snapdragon
// for(let mob of mobiles){
//     if(mob[4]=="snapdragon"){
//         // console.log(mob);
//     }
// }

// //costly mob with snapdragon and 5g

// var snap_5g=[]
// for(let mob of mobiles){
//     if(mob[4]=="snapdragon" && mob[6]=="5G"){
//         snap_5g.push(mob)
//     }
// }
// snap_5g.sort((i,j)=>j[3]-i[3])
// // console.log(snap_5g[0]);

// //is there any mob can i purchase below 10k

// for(let mob of mobiles){
//   var pp=mob[3]<1000?"true":"false"
   
// }
// console.log(pp);




// //print samsung a51 mob details

// for(let mob of mobiles){
//     if(mob[2]=="samsung A51"){
//         console.log(mob);
//     }
// }