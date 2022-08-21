function getIncomAmountValueById(incomMoney) {
    const myIncomeField = document.getElementById(incomMoney);
    const myIncomeFieldString = myIncomeField.value;
    const myIncomeFieldValue = parseInt(myIncomeFieldString);
    return myIncomeFieldValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.value = newValue;
}


function getSaveAmountValueById(elementId) {
    const mySavingField = document.getElementById(elementId);
    const mySavingFieldString = mySavingField.value;
    const mySavingFieldValue = parseInt(mySavingFieldString);
    return mySavingFieldValue;
}

document.getElementById('calculate-total').addEventListener('click', function () {
    // my total incom
    const myIncome = getIncomAmountValueById('income-amount');

    // food expense
    const foodExpense = getIncomAmountValueById('food-cost');
    // rentExpense
    const rentExpense = getIncomAmountValueById('rent-expense');
    // shoe expense
    const shoeExpense = getIncomAmountValueById('shoe-expense');

    // total cost
    const myTotalcost = foodExpense + rentExpense + shoeExpense;

    // calculated Balance
    const myCalculatedBalance = myIncome - myTotalcost;


    setTextElementValueById('total-expense', myTotalcost);

    setTextElementValueById('available-balance', myCalculatedBalance);

})

document.getElementById('save-btn').addEventListener('click', function () {
    const savingAmount = getSaveAmountValueById('save-amount');

    const myIncome = getIncomAmountValueById('income-amount');


    // food expense
    const foodExpense = getIncomAmountValueById('food-cost');
    // rentExpense
    const rentExpense = getIncomAmountValueById('rent-expense');
    // shoe expense
    const shoeExpense = getIncomAmountValueById('shoe-expense');

    // total cost
    const myTotalcost = foodExpense + rentExpense + shoeExpense;
    const myCalculatedBalance = myIncome - myTotalcost;

    const totalSaved = (savingAmount / 100) * myCalculatedBalance;
    setTextElementValueById('total-saved', totalSaved)

    const remainingBalance = myCalculatedBalance - totalSaved
    setTextElementValueById('remaining-balance', remainingBalance);

})



