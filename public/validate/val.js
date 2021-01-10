function validateform(){  
  var expyear=document.myform.expyear.value;  
  var cardnumber=document.myform.cardnumber.value; 
  var cvv=document.myform.cvv.value;
  
    
  if(cardnumber.length!=16){  
    alert("Password must be equal to 16 characters long.");  
    return false;  
    }
  else if(cardnumber.match(/^[0-9]+$/) == null){  
    alert("Credit card number must be all numbers.");  
    return false;  
    }
  else if(expyear.match(/^[0-9]+$/) == null){  
    alert("Expiry year must be all numbers.");  
    return false;  
    }  
  else if(expyear.length!=4){  
    alert("Expiry year must be equal to 4 numbers.");  
    return false;  
    }
  else if(cvv.match(/^[0-9]+$/) == null){  
    alert("CVV number must be all numbers.");  
    return false;  
    }    
  else if(cvv.length!=3){  
    alert("CVV number must be equal to 3 numbers.");  
    return false;  
    }

  }  

module.exports = validateform