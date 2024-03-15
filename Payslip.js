
function payslip(){

     let bp = parseInt(document.getElementById("basicpay").value);
     
     let hra =parseInt(document.getElementById("hra").value=bp*(15/100));
     let da =parseInt(document.getElementById("da").value=bp*(5/100)) ;
     let travel =parseInt(document.getElementById("travel").value=bp*(15/100));
     let pf=parseInt(document.getElementById("pf").value=bp*(10/100)) ;


    //  i reduced the code cuz i directly used the parseint method in the above code 

    //  hra = parseInt(hra);
    //  da = parseInt(da);
    //  travel = parseInt(travel);
    // pf = parseInt(pf);

   //  const tablebody =document.getElementById

    let gross = document.getElementById('gross').value= bp+hra+da+travel+pf;
    gross = parseInt(gross);

    let netsalary = document.getElementById('netsal').value = gross-pf;

    var tablebody = document.getElementById("payslipbody");
tablebody.innerHTML = "";

var newRow = tablebody.insertRow();

var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);
var cell5 = newRow.insertCell(4);

cell1.textContent = bp;
cell2.textContent = hra;
cell3.textContent = da;
cell4.textContent = travel;
cell5.textContent = pf;


 }
 
 
document.getElementById("submit").addEventListener("click", payslip);
