document.getElementById("loan-form").addEventListener("submit",calculate);

function calculate(e){
    e.preventDefault();
    let amount = document.getElementById("amount"); // the amount input
    let interest = document.getElementById("interest");
    let years = document.getElementById("years");

    let monthlypayment = document.getElementById("monthly-payment"); // the result
    let principal = parseFloat(amount.value);
    //alert(typeof principal);
    let calculatedInterest = parseFloat(interest.value)/100/12;
    //alert(typeof calculatedInterest);
    let calculatedPayments = parseFloat(years.value)*12;
    //alert(calculatedPayments);
    
    let x = Math.pow(1 + calculatedInterest.calculatedPayments);
    let monthly = (principal * x * calculatedInterest) / (x-1);
    // alert(monthly.toFixed(2));
    let totalPayment = monthly.toFixed(2) * calculatedPayments
    console.log ("the total amount to pay is : " +totalPayment);

    let totalInterest = totalPayment - principal;
    console.log("the total interest is :"+totalInterest);

    if(isFinite(monthly)){
        monthlypayment.innerText=monthly.toFixed(2);
    }
    else{
        monthlypayment.innerText="please check your numbers";
    }
}
