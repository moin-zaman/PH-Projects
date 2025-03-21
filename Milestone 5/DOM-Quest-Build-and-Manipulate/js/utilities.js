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


// Create and Set History Div using following ID

function getDonatedLocation(id, donateAmountNoakhali)
{
    const donatedLocationNoakhali = document.getElementById(id).innerText;

        const createHistoryDiv = document.createElement('div');


        createHistoryDiv.innerText = `${donateAmountNoakhali} Taka is ${donatedLocationNoakhali}`;

        const donatedDate = new Date().toLocaleString('en-GB');
        const p = document.createElement('h1');
        p.innerText = donatedDate;


        createHistoryDiv.appendChild(p);



        createHistoryDiv.classList.add('max-w-screen-xl', 'mx-auto', 'box-border', 'border', 'border-1', 'bg-yellow-200', 'rounded-3xl', 'shadow-lg', 'p-5', 'mb-4');

        return createHistoryDiv;
}
