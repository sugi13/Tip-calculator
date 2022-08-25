let amountField = document.getElementById("amount-field");
let percentField = document.getElementById("percent-field");
let splitBill = document.getElementById("split-field");

let button = document.querySelector("#btn");
let resetButton = document.querySelector("#reset-btn");

let TipAmount = document.querySelector("#tip-amount");
let totalAmount = document.querySelector("#total-amount");
let splitBillField = document.querySelector("#split-bill")



function calculateTip(){
    let res = percentField.value / 100;
    let total = amountField.value * res;
    let split = total / splitBill.value;


    TipAmount.innerHTML = `Tip: ${parseInt(total)}.00`;

    splitBillField.innerHTML = `Tip per person: ${split.toFixed(2)}`;

    // calculate total //
    let sumAll = total + parseInt(amountField.value);
    totalAmount.innerHTML = `Total[tip + bill]: ${parseInt(sumAll)}.00`;
}

function resetAll(){
    amountField.value = "";
    percentField.value = "";
    splitBill.value = "";

    TipAmount.innerHTML = `Tip Amount: 0.00`;
    splitBillField.innerHTML = `Tip per person: 0.00`;
    totalAmount.innerHTML = `Total[tip + bill]: 0.00`;

    location.reload();
}

button.addEventListener("click", calculateTip);
resetButton.addEventListener("click", resetAll);