function cardnumber()
{
    var ccNum = document.getElementById("cname").value; 
    var cardno = /^(?:3[47][0-9]{13})$/;
    if(ccNum.value.match(cardno))
        {
        return true;
        }
    else
        {
        alert("Not a valid Amercican Express credit card number!");
        return false;
        }
}

