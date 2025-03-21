const donateBtnNoa = document.getElementById('btn-donate-now-noakhali');

const historyDivByID = document.getElementById('history-div');

const modal = document.getElementById('my_modal_1');




// For Noakhali
donateBtnNoa.addEventListener('click', function () {

    const donateAmountNoakhali = parseFloat(getDonatedAmountByID('donate-amount-noakhali'));

    // Show donated amount for Noakhali
    const donatedAmountNoakhaliShow = parseFloat(showDonatedAmountById('donate-balance-noakhali'));

    // Add amount with Existent Donated Money;
    const totalDonatedAmountNoakhali = donateAmountNoakhali + donatedAmountNoakhaliShow;



    // Get Availble Donation Amount From  Function

    const donationAvailableAmount = parseFloat(getAvailableDonationAmountById('donate-balance-available-nav'));

    const totalDonationAvailableAmount = donationAvailableAmount - donateAmountNoakhali;


    if (donateAmountNoakhali <= 0 || isNaN(totalDonatedAmountNoakhali)) {
        alert("Invalid Amount can not be added");
        return;
    }
    else if (totalDonationAvailableAmount < 0) {
        alert("Not Enough Balance in the Account");
    }
    else {
        document.getElementById('donate-amount-show-noakhali').innerText = totalDonatedAmountNoakhali;
        document.getElementById('donate-balance-available-nav').innerText = totalDonationAvailableAmount;

        // Bonus Modal Section Open after clicking Donate Button

        modal.showModal();


        // History Part

        const createHistoryDiv = getDonatedLocation('donate-location-noakhali', donateAmountNoakhali);

        historyDivByID.appendChild(createHistoryDiv);
        console.log(createHistoryDiv);



        

    }






});

