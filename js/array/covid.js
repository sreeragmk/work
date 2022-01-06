var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district
    var highest=coivd_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
    //    console.log(highest);
// q2 district with higest 1 dose vaccination rate
        var high_vac=coivd_data.reduce((dc1,dc2)=>dc1[5]>dc2[5]?dc1:dc2)[5]
        //  console.log(high_vac);
// q3 district with lowest death cases
        var low_d=coivd_data.reduce((d1,d2)=>d1[3]>d2[3]?d2:d1)
        // console.log(low_d);
// q4 sort district with +ve cases
        var district=coivd_data.sort((d1,d2)=>d2[2]-d1[2])
        //  console.log(district);
// q5 sort the districts based on 1st dose
        var dose=coivd_data.sort((d1,d2)=>d1[5]-d2[5])
        // console.log(dose);
// q6 is there any states with +ve cases > 60000
        var isany=coivd_data.some(d1=>d1[2]>60000)
        // console.log(isany);
// q7 print trissur details
        var details=coivd_data.find(det=>det[1]=="thrissur")
        // console.log(details);
// q8 total number of +ve cases
       var total=coivd_data.reduce((d1,d2)=>d1[6]+d2[6])
//        console.log(total);
// q9 total number of cured cases
        var tot1=coivd_data.map(d1=>d1[2]).reduce((ct1,ct2)=>ct1+ct2)
        console.log(tot1);
// q10 cured numbers of iduky
        var details=coivd_data.find(d1=>d1[1]=="iduky")[4]
        // console.log(details);


// q11 total number of death cases
        var total_death=coivd_data.map(d1=>d1[3]).reduce((dc1,dc2)=>dc1+dc2)
        // console.log(total_death);