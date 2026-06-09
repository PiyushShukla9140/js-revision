const accountId = 2345
let accountEmail = "Piyush@google.com"
var accountPassword = "12344"
accountCity="Lucknow"

// accountId = 4 not allowed 
console.log(accountId)

accountEmail = "Piyush567@google.com"
accountPassword = "1237890"
accountCity="Jaipur"

console.table([accountEmail,accountPassword,accountCity])

/* prefer not use var because 
of issue in lexicla and functional scope */

let accountState;
console.log(accountState)// this would print undefined



