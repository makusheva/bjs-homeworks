function calculateTotalMortgage(percent, contribution, amount, date) {
    let date1 = new Date;
        date2 = date;
        year1 = date1.getFullYear();
        year2 = date2.getFullYear();
        month1 = date1.getMonth();
        month2 = date2.getMonth();
        loanBody = amount - contribution;
        percentFractionalNumber = percent / 100 / 12;
    if(month1===0){ 
        month1++;
        month2++;
    }
    let numberOfMonths; 
    numberOfMonths = (year2 - year1) * 12 + (month2 - month1);

    let monthlyFee = loanBody * (percentFractionalNumber + percentFractionalNumber / (Math.pow((1 + percentFractionalNumber), numberOfMonths) - 1))
    let totalAmount = monthlyFee * numberOfMonths;
    totalAmount = parseFloat(totalAmount.toFixed(2));
    console.log(numberOfMonths);
    console.log(loanBody);
    console.log(monthlyFee);
    return totalAmount;
}



function getGreeting(name) {
	if (name == '' || name == 'null' || name =='undefined') {
		name = 'Аноним'
	}
	
	greeting = `Привет, мир! Меня зовут ${name}`;
	
	return greeting;
}