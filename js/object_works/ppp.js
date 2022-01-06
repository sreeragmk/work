let cetr={from:frameElement,amount,amt}
let dbtr={to:to,amount:amt}
users[fr].transaction.crdttransaction.push(cetr)
users[to].transaction.debitTrans.push(dbtr)


let crTr={from:fr,amount:amt}
                let dbTr={to:to,amount:amt}
                users[fr].transaction.debitTransaction.push(dbTr)
                users[to].transaction.creditTransaction.push(crTr)