class Bank{
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
    
        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
    
    }
    session={}


    validateAccountNumber(acno){
        return acno in this.accounts ?true:false
    }


    authenticate(acno,password){
        if(this.validateAccountNumber(acno)){
            let pwd=this.accounts[acno].password
            if(password==pwd){
                console.log("access granded");
                this.session["user"]=acno
            }
            else{
                console.log("invalid password");
            }
        }
        else{
            console.log("invalid accno");
        }

    }



    getBalance(acno){
        ////// if(this.validateAccountNumber(acno)){
            return this.accounts[acno].balance
        }
   //// // }
    balanceEnquiry(){
        if("user" in this.session){
            let loggedUser=this.session["user"]
            console.log(this.getBalance(loggedUser));
        }
        else{
            console.log("invalid session u must login");
        }
    }


    loginRequired(){
        return "user" in this.session?true:false
    }
    fundTransfer(to_acno,amount){
        if(this.loginRequired()){
            let loggedUser=this.session["user"]
            if(this.validateAccountNumber(to_acno)){
                let curBal=this.getBalance(loggedUser)
                if(amount>curBal){
                   console.log("insufficiebt balance"); 
                }
                else{
                    console.log("transaction completed");

                }
            }
            else{
                console.log("invalid to acc number");
            }
        }
        else{
            console.log("invalid session umust loggedin");
        }
        
    }








}

var bank=new Bank()
//console.log(bank.validateAccountNumber(1000));
  bank.authenticate(1000,"userone")
/////////////console.log(bank.getBalance(1000));
bank.balanceEnquiry()
bank.fundTransfer(1002,10000)