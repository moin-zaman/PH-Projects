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

       
        // Bonus Modal Section Open after clicking Donate Button

        modal.showModal();

        // History Part

        const createHistoryDiv = getDonatedLocation('donate-location-feni', donateAmountFeni);

        historyDivByID.appendChild(createHistoryDiv);
        console.log(createHistoryDiv);


        
    }




});
