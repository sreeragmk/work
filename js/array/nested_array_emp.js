var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
//sec highest
employees.sort((e1,e2)=>e2[2]-e1[2])
console.log(employees[1][2]);
console.log(employees[employees.length-1][2]);




//printall employee name
// for(let employee of employees){
//     console.log(employee[1]);
// }

//print developers details
// for(let employee of employees){
//     if(employee[3]=="developer"){
//         console.log(employee);
//     }
// }

//print exp of each emp
// for (let employee of employees){
    
//     console.log(employee[5]-employee[4]);
// }

//exp>10
// for(let employee of employees){
//     let exp=employee[5]-employee[4]
//     if(exp>10){
//         console.log(employee);
//     }
// }

//highest sallery
// var sal=0;
// for(let employee of employees){
//     if(employee[2]>sal){
//         sal=employee[2]
//     }
// }
// console.log(sal);

// q6 print  second highest salary 
// q7 minimum salary
// q8 number of employees 
// q9 highest salary amoung developers
// q10 print details of employees whose name start with A
// q11 print details of employees who were working int period of 2010 to 2015


//second highest


//minimum salary
// var min_sal=15000
// for(let employee of employees){
    
//     if(employee[2]<min_sal){     //7<15 35<7
//         min_sal=employee[2]
//     }
// }
// console.log(min_sal);



//no of employees
console.log(employees.length);



//highest salary among developer
var max_sal=0
for(let employee of employees){
    if(employee[3]=="developer"  && employee[2]>max_sal){
        max_sal=employee[2]
        
    }
}
console.log(max_sal);


//2nd method
var emp_det=[]
for(let employee of employees){
    if(employee[3]=="developer"){
        emp_det.push(employee)
    }
}
emp_det.sort((i,j)=>j[2]-i[2])
console.log(emp_det[0][2]);





//name with A
for(let emp of employees){
    if(emp[1][0]=='a' || emp[1][0]=='A'){
        console.log(emp[1]);
    }
}


//period
for(let emp of employees){
    if(emp[4]==2010 && emp[5]==2015){
        console.log(emp);
    }
}
//2nd method
for(let emp of employees){
    if(emp[4]>2009 && emp[5]<2016){
        console.log(emp);
    }
}

