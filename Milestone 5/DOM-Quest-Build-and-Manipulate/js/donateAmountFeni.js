const donateBtnFeni = document.getElementById('btn-donate-now-feni');


// For Feni

donateBtnFeni.addEventListener('click', function () {

    const donateAmountFeni = parseFloat(getDonatedAmountByID('donate-amount-feni'));

    // Show donated amount for Noakhali
    const donatedAmountFeniShow = parseFloat(showDonatedAmountById('donate-balance-feni'));

    // Add amount with Existent Donated Money;
    const totalDonatedAmountFeni = donateAmountFeni + donatedAmountFeniShow;


    // Get Availble Donation Amount From  Function

    const donationAvailableAmount = parseFloat(getAvailableDonationAmountById('donate-balance-available-nav'));

    const totalDonationAvailableAmount = donationAvailableAmount - donateAmountFeni;


    if (donateAmountFeni <= 0 || isNaN(totalDonatedAmountFeni)) {
        alert("Invalid Amount can not be added");
        return;
    }
    else if (totalDonationAvailableAmount < 0) {
        alert("Not Enough Balance in the Account");
    }
    else {
        document.getElementById('donate-amount-show-feni').innerText = totalDonatedAmountFeni;
        document.getElementById('donate-balance-available-nav').innerText = totalDonationAvailableAmount;

        // History Part

        const donatedLocationFeni = document.getElementById('donate-location-feni').innerText;

        const createHistoryDiv = document.createElement('div');

        createHistoryDiv.innerText = `${donateAmountFeni} Taka is ${donatedLocationFeni}`;


        createHistoryDiv.classList.add('max-w-screen-xl', 'mx-auto', 'box-border', 'border', 'border-1', 'bg-yellow-200', 'rounded-3xl', 'shadow-lg', 'p-5', 'mb-4');


        historyDivByID.appendChild(createHistoryDiv);
        console.log(createHistoryDiv);

        modal.showModal();
    }




});
