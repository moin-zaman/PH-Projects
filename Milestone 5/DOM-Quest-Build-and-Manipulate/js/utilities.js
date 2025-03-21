// Get the Donate Amount
function getDonatedAmountByID(id)
{
    const donateAmountNoakhali = document.getElementById(id).value;
    return donateAmountNoakhali;
}

// Display Existent Donated Amount

function showDonatedAmountById(id)
{
    const donatedAmountShow = document.getElementById(id).innerText;
    return donatedAmountShow;
}

//Get the Available Amount

function getAvailableDonationAmountById(id)
{
    const donationAvailableAmount = document.getElementById(id).innerText;
    return donationAvailableAmount;
}


// Get History Button

function getTransactionsHistoryById(id)
{
    const transactionsHistory = document.getElementById(id);
}


// Get Id for Facilities Button

function getIdForFacilitiesByID(id)
{
    const idForFacilities = document.getElementById(id);

    return idForFacilities;
}
