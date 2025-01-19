// Main Section js code starts 

const noakhaliBalanceElement = document.getElementById("noakhali-balance");
const feniBalanceElement = document.getElementById("feni-balance");
const quotaBalanceElement = document.getElementById("quota-balance");

const noakhaliInput = document.getElementById("noakhali-input");
const feniInput = document.getElementById("feni-input");
const quotaInput = document.getElementById("quota-input");

const noakhaliButton = document.getElementById("noakhali-button");
const feniButton = document.getElementById("feni-button");
const quotaButton = document.getElementById("quota-button");

const modal = document.getElementById("my_modal_1");
const closeModalButton = document.getElementById("close-modal");

// History Section Making 
const historySection = document.createElement("div");
document.body.appendChild(historySection);
historySection.className = "px-8 py-4";
historySection.innerHTML = `
        <div class ="p-6 bg-white rounded-lg drop-shadow">
            <ul id = "donation-history" class = "space-y-4"></ul>
         </div>`;

const donationHistoryList = document.getElementById("donation-history");

// donation handle process  
function handleDonation (section, inputElement, balanceElement) {
    const donationAmount = parseFloat (inputElement.value);
    const websiteBalance = parseFloat(websiteBalanceElement.textContent);

    // making donation valid 
    if (isNaN (donationAmount) || donationAmount <= 0){
        alert ("Oops!! Please Give a Valid Input!!");
        return;
    }

    if (donationAmount > websiteBalance) {
        alert ("Oops!! You Exceed The Balance!! Try Again Later!!");
        return;
    }
}
// update balance 

const currentSectionBalance = parseFloat(balanceElement.textContent);
balanceElement.textContent = (currentSectionBalance + donationAmount);
websiteBalanceElement.textContent = (websiteBalance - donationAmount);