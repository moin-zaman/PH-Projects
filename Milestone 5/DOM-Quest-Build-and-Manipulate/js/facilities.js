const donationFeatureBtn = document.getElementById('btn-donation-feature');
const historyFeatureBtn = document.getElementById('btn-history-feature');


// Donation Button

donationFeatureBtn.addEventListener('click', function(){


    donationFeatureBtn.classList.add('bg-info', 'text-white');


    historyFeatureBtn.classList.add('bg-base-200');
    historyFeatureBtn.classList.remove('bg-info', 'text-white');

    // Get ID for Showing Different UI using Facilities For Donation Button

    const idForFacilities = getIdForFacilitiesByID('history-div');
    idForFacilities.classList.add('hidden');

    document.getElementById('main-id').classList.remove('hidden');

});


// History Button

historyFeatureBtn.addEventListener('click', function(){


    historyFeatureBtn.classList.add('bg-info', 'text-white');
    
    donationFeatureBtn.classList.add('bg-base-200');
    donationFeatureBtn.classList.remove('bg-info', 'text-white');


    // Get ID for Showing Different UI using Facilities History Button

    const idForFacilities = getIdForFacilitiesByID('main-id');
    idForFacilities.classList.add('hidden');

    document.getElementById('history-div').classList.remove('hidden');
    
    


});

