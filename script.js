function compute()
{
    var principal=document.getElementById("principal").value;
    if(parseInt(principal) < 1) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return;
	};
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interest=principal*years*rate/100;
    var year =new Date().getFullYear()+parseInt(years);
    p = document.getElementById("principal").value;
    
    document.getElementById("depositmessage").innerHTML = ""+principal;
	document.getElementById("interestmessage").innerHTML = ""+rate;
	document.getElementById("amountmessage").innerHTML = ""+interest;
	document.getElementById("yearmessage").innerHTML = ""+year;
	
	return false;
}
function updateRate(){
var rateval = document.getElementById("rate").value;
document.getElementById("rate_val").innerText=rateval;
}    

var result=document.getElementById("result");