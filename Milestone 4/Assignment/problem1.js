function calculateTax(income, expense)
{
    if(income < 0 || expense < 0 || income < expense)
    {
        return `Invalid Input`;
    }

    else{
        const remainingMOney = income - expense;
        const taxMoney = remainingMOney * 20 / 100;
        return taxMoney;
    }
}

const taxMoney = calculateTax(0, 0);
console.log(taxMoney);