var purchasePrice = document.querySelector("#purchase-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var checkButton = document.querySelector("#check-button");



checkButton.addEventListener("click", checkProfitOrLoss )



function checkProfitOrLoss(){

    // var costPrice=purchasePrice.value;
    // var quantity=stockQuantity.value;
    // var stockPrice=currentPrice.value;

    if(purchasePrice.value > 0 && stockQuantity.value > 0 && currentPrice.value> 0 ){
        //Loss 
       if(purchasePrice.value > currentPrice.value){
         var lossAmount=(purchasePrice.value- currentPrice.value)*stockQuantity.value;
         var lossPercentage=((purchasePrice.value-currentPrice.value)/purchasePrice.value)*100  ;
         console.log(lossPercentage,lossAmount);
       }
        
    }else   {
        console.log("Error : Enter valid values (i.e. positive values) in all the fields.")
    }
    

   
}