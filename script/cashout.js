document.getElementById("cashout-btn").addEventListener("click",function(){
      const cashoutNumberInput=document.getElementById("cashout-number");
      const cashoutNumber=cashoutNumberInput.value;
      if(cashoutNumber.length!==11){
        alert("invalid agent number");
        return;

        
      }

     const cashoutAmountInput=document.getElementById("cashout-amount");
     const cashoutAmount=cashoutAmountInput.value;
      console.log("Amount is = "+cashoutAmount);

     const currentBalance=document.getElementById("balance");
     const Balance=currentBalance.innerText;
      console.log("Current balance = " +Balance);

         const pinInput=document.getElementById("cashout-pin");
     const validPin=pinInput.value;
     if(validPin==="1234"){
         alert("Given pin is valid");
        
     }
     else{
         alert("Invalid pin");
         return;
     }

     const newBalance =Number(Balance)-Number(cashoutAmount);
     
     if(newBalance<0){
        alert("Invalid Amount");
        return;
     }
     else{
        currentBalance.innerText=newBalance;
        console.log("New balance = "+ newBalance);
     }

    
     
     
})