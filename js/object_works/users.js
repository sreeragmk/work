var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone",transaction:{creditTransaction:[],debitTransaction:[]}},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo",transaction:{creditTransaction:[],debitTransaction:[]}},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree",transaction:{creditTransaction:[],debitTransaction:[]}},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour",transaction:{creditTransaction:[],debitTransaction:[]}},

}

//cannot use map/filter bec only applicable in arrayof objects
//this is nested oblects+


// console.log(users[1000]);
// //name of 1003
// console.log(users[1003].personName);
// console.log(users[1003].personName);
// //1000 details
// console.log(users[1000]);
// //balance of 1002
// console.log(users[1002].balance);
// console.log(users[1002].balance);
// //1005 exist
// console.log("1005" in users);
// console.log("1005" in users);


// function authenticate(acc_no,passwd){
//     if(acc_no in users){
//         let pwd=users[acc_no].password
//         if(pwd==passwd){
//             return 1

//         }
//         else{
//             return -1
//         }
//     }
//     else{
//         return 0
//     }
// }
// console.log(authenticate(1000,"userone"));

// function fundTransfer(from_acno,to_acno,amt){
//     if(from_acno in users){
//         if(to_acno in users){
//             let bal=users[from_acno].balance
//              if(amt>bal){
//                     console.log("insufficient amount");
//                 }
//                 else{
//                     users[from_acno].balance-=amt
//                     users[to_acno].balance+=amt
//                 }
//         }
//         else{
//             return 00
//         }

//     }
//     else{
//         return 0
//     }
// }
// console.log(fundTransfer(10000,1002,200));
// console.log(users[1000],users[1002]);   

// function authenticate(accno,passwd){
//     if(accno in users){
//         let pas=users[accno].password
//         if(pas==passwd){
//          console.log("Yes have are sucessfully logedin");
//             return 1
//         }
//         else{
//              console.log("sorry! password doesnot match");
//             return -1
//         }

//     }
//     else{
//         console.log("this acc no doesnot exist");
//         return 0
//     }
// }
// console.log(authenticate(1000,"userone"));



// function FundTransferrr(fr_ac,to_ac,amt){
//     if(fr_ac in users){
//         if(to_ac in users){
//             let ppp=users[fr_ac].balance
//             if(amt>ppp){
//                 console.log("insufficient");
//             }
//             else{
//                 users[fr_ac].balance-=amt
//                 users[to_ac].balance+=amt
//             }
//         }
//         else{
//             console.log("To_acno doesnot found");
//         }

//     }
//     else{
//         console.log("from acc no does not exist");
//     }
// }
// console.log(FundTransferrr(1002,1003,200));
// console.log(users[1002],users[1003]);


function validateAccountNumber(acno){
    return acno in users?true:false
}

function Transfer(fr,to,amt){
    if(validateAccountNumber(fr)&&validateAccountNumber(to)){
        let am=users[fr].balance
        if(am>amt){
            users[fr].balance-=amt
            let frm_acno_bal=BalanceEnquiry(fr)
            
            console.log(`your acno ${fr} account has beeen debited with amount ${amt} and remaining balance is ${frm_acno_bal}`);
            users[to].balance+=amt
            let to_acno_bal=BalanceEnquiry(to)
            console.log(`your acno ${to} account has beeen debited with amount ${amt} and remaining balance is ${to_acno_bal}`);
            let crTr={from:fr,amount:amt}
            let Dbtr={to:to,amount:amt}
            users[fr].transaction.debitTransaction.push(Dbtr)
            users[to].transaction.creditTransaction.push(crTr)  
            



        }
        else{
            console.log("insufficient");
        }
    }
    else{
        console.log("invalid acc no");
    }
}
console.log(Transfer(1000,1003,200));
// console.log(users);
console.log(users[1000],users[1001]);

function BalanceEnquiry(acno){
    if(validateAccountNumber(acno)){
        return(users[acno].balance);
    }
    else{
        console.log("invalid accno");
    }
}
console.log(BalanceEnquiry(1000));
console.log(users[1003].transaction);

