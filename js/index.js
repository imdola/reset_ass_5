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

