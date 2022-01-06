var baleno={
    color:["red","blue"],
    varients:["petrol"],
    manufacture:["nexa"],
    prize:["8lack"],
    getPrice(){
        return this.prize
    }
}


var glanza={
    manufacture:"toyota",
    prize:"9lack"
}
glanza.__proto__=baleno
console.log(glanza.getPrice());