var purchasePrice = document.querySelector("#purchase-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var checkButton = document.querySelector("#check-button");
var outputBox = document.querySelector("#output-box");
var errorBox = document.querySelector("#error-box");



checkButton.addEventListener("click", checkProfitOrLoss )



function checkProfitOrLoss(){

    var costPrice=Number(purchasePrice.value);
    var quantity=Number(stockQuantity.value);
    var stockPrice=Number(currentPrice.value);

    errorBox.style.display = "none";
    outputBox.style.display = "none";

    if( costPrice > 0 && quantity > 0 && stockPrice> 0 ){
        //loss    
        if(costPrice>stockPrice){
            var lossAmount = (costPrice-stockPrice)*quantity;
            var lossPercentage = ((costPrice-stockPrice)/costPrice)*100;
            
            outputBox.style.display = "block";
            outputBox.innerHTML=  `<div style="background-color: rgb(255, 255,255,0.2); padding: 0.5rem; margin-top:1.5rem">You lost ${lossPercentage.toFixed(2)}%. Your total loss is ₹${lossAmount.toFixed(2)}</div>`
            }
            //profit
            else if(costPrice < stockPrice ) {

            var profitAmount = (stockPrice-costPrice)*quantity;
            var profitPercentage = ((stockPrice-costPrice)/costPrice)*100;
            
            outputBox.style.display = "block";
            outputBox.innerHTML= `<div style="background-color: rgb(255, 255,255,0.2); padding: 0.5rem; margin-top:1.5rem">You gained ${profitPercentage.toFixed(2)}%. Your total profit is ₹${profitAmount.toFixed(2)}</div>`
            }else{

                outputBox.style.display = "block";
                outputBox.innerHTML=`<div style="background-color: rgb(255, 255,255,0.2); padding: 0.5rem; margin-top:1.5rem">You Stock Price is ₹${stockPrice} same as Purchase price ₹${costPrice}. You neither lost nor gained any money.</div>`
            }
    }else {
        errorBox.style.display = "block";
        errorBox.innerHTML="Please enter values greater than 0 in all the above fields (only numbers are allowed).";
    }
}