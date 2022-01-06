var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    
]

// var mob_names=mobiles.map(mob=>mob[2])
var mob_name=mobiles.map(mob=>mob[2])
// console.log(mob_name);
// console.log(mob_names);

// var mob_prices=mobiles.map(mob=>mob[3])
var mob_pri=mobiles.map(mob=>[mob[3],mob[2]])
// console.log(mob_pri);
// console.log(mob_prices);

// var sam=mobiles.filter(mob=>mob[1]=="samsung")
var sam=mobiles.filter(mob=>mob[1]=="samsung").map(mob=>mob[0])
// console.log(sam);
// console.log(sam);

//print all mob available under 25k
var mob_price=mobiles.filter(mob=>mob[3]<25000).map(mob=>[mob[2],mob[3]])
// var mob_pri=mobiles.filter(mob=>mob[3]<25000)
// console.log(mob_pri);
// console.log(mob_price);

//print mob available in price range of 25k-30k
// var mob_pri=mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=30000)
var mob_range=mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=30000)
// console.log(mob_range);
// console.log(mob_pri);

//list all 5g mob names
    mob_band=mobiles.filter(mob=>mob[6]=="5G").map(mob=>[mob[1],mob[2]])
    //  console.log(mob_band);
//list all 5g mob available under 25k
var band_p=mobiles.filter(mob=>mob[6]=="5G" && mob[3]<25000)
//  console.log(band_p);
//list all samsung mob names whose band=4g and display tye AMOLED
var band_led=mobiles.filter(mob=>mob[1]=="samsung" && mob[6]=="4g" && mob[5]=="AMOLED")
// console.log(band_led);


var highest=mobiles.reduce((mob1,mob2)=>mob1[3]>mob2[3]?mob1:mob2)[3]
// console.log(highest);

var cheaply_mob=mobiles.reduce((m1,m2)=>m1[3]>m2[3]?m2:m1)
// console.log(cheaply_mob);
var tt=mobiles.reduce((m1,m2)=>m1[0]+m2[0])
console.log(tt);

var isavl=mobiles.some(mob=>mob[3]==10000)
// console.log(isavl);

var mob_range=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=25000)
// console.log(mob_range);


var mob_red=mobiles.find(mob=>mob[1]=="redmi")
// console.log(mob_red);
var nameById=mobiles.find(mob=>mob[0]==1000)
// console.log(nameById);