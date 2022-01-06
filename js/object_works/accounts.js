var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]


//   q1  total number of accounts
//  //// var tot=accounts.map(n1=>n1.acno)
//  //// console.log(tot);
//console.log(accounts.length);

//q2 print all acc numbers whose acc-type savings
// accounts.filter(d1=>d1.ac_type=="savings").forEach(data=>console.log(data.acno))

//print balance of acn0=1000
// accounts.filter(d1=>d1.acno==1000).find(d2=>console.log(d2.balance))

//print all gpay transaction details
// var trans=accounts.map(d1=>d1.transactions).flat().filter(ds=>ds.method=="g-pay")
// console.log(trans);

//print credit transaction of 1002
// var crdt=accounts.map(d1=>d1.transactions).flat().filter(t=>t.to==1002)
// console.log(crdt);

//print highest acc balance details
// var maxbal=accounts.sort((a1,a2)=>a2.balance-a1.balance)[0]
// console.log(maxbal);

//print transaction history of 1002

var debitTransaction=accounts.find(data=>data.acno==1002).transactions
// console.log(debitTransaction);

var creditTransaction=accounts.map(data=>data.transactions).flat().filter(d1=>d1.to==1002)
// console.log(creditTransaction);

// var TransactionHistory={"creditTransaction":[...creditTransaction],"debit":[...debitTransaction]}
// console.log(TransactionHistory);

var TransactionHistory={debitTransaction,creditTransaction}
console.log(TransactionHistory);