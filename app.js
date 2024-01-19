let balance = document.getElementById("balance-js")
let earning = document.querySelector("#earning")
let upgradediv = document.getElementById("upgrade")
let clear = document.querySelector("#clear")
let startpluse = document.getElementById('addamount')
let buyprice = document.getElementById('buybutton')
let starterEarns = 1
let starterbal = Number()
let gel = "₾" 
earning.innerText = `Your current earn per click is: '${starterEarns}${gel}'.`
balance.innerText = 0 




// some functions

function checkbalance() {
    if (balance.innerText < 0) {
        balance.style.color = "red"
    } 
    else if (balance.innerText >= 0) {
        balance.style.color = "white"
    }  
}

// Buy fiunctions.

function addprice(add,price) { // ამატებს შემოსავალს ზედას რაც გავიგეთ
    if (balance.innerText >= price) {
        return starterEarns = starterEarns + add
    }
    else if (balance.innerText < price) {
        alert("You don't have blance to buy this!!")
    } else {
        alert("error")
    }
}

function updateearn() {
    earning.innerText = `Your current earn per click is: '${starterEarns}${gel}'.`
}

function pay(pay) { // გადახდა, ბალანს აკლდება ფული
    if (balance.innerText >= pay) {
        return balance.innerText = balance.innerText - pay
    }
    else if (balance.innerText < pay) {
        alert("You don't have blance to buy this!!")
    } else {
        alert("error")
    }
}


// Open functions.

function earn() {
   for(let i = 0; i < starterEarns; i++) {
    balance.innerText++
   }
}

function discount() {
    for(let i = 0; i < 1; i++) {
     balance.innerText--
    }
}

function restart() {
    balance.innerText = 0
}

function openupgrade() {
    upgradediv.style.display = "flex"  
}

function closeupgrade() {
    upgradediv.style.display = "none"  
}

