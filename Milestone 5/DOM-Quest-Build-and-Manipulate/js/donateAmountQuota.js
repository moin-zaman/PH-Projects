const donateBtnQuota = document.getElementById('btn-donate-now-quota');

// For Quota Student


donateBtnQuota.addEventListener('click', function () {

    const donateAmountQuota = parseFloat(getDonatedAmountByID('donate-amount-quota'));

    // Show donated amount for Noakhali
    const donatedAmountQuotaShow = parseFloat(showDonatedAmountById('donate-balance-quota'));

    // Add amount with Existent Donated Money;
    const totalDonatedAmountQuota = donateAmountQuota + donatedAmountQuotaShow;


    // Get Availble Donation Amount From  Function

    const donationAvailableAmount = parseFloat(getAvailableDonationAmountById('donate-balance-available-nav'));

    const totalDonationAvailableAmount = donationAvailableAmount - donateAmountQuota;



    if (donateAmountQuota <= 0 || isNaN(totalDonatedAmountQuota)) {
        alert("Invalid Amount can not be added");
        return;
    }
    else if (totalDonationAvailableAmount < 0) {
        alert("Not Enough Balance in the Account");
    }
    else {
        document.getElementById('donate-amount-show-quota').innerText = totalDonatedAmountQuota;

        document.getElementById('donate-balance-available-nav').innerText = totalDonationAvailableAmount;



        // Bonus Modal Section Open after clicking Donate Button

        modal.showModal();


        // History Part

        const createHistoryDiv = getDonatedLocation('donate-location-quota', donateAmountQuota);

        historyDivByID.appendChild(createHistoryDiv);
        console.log(createHistoryDiv);


        
    }



});