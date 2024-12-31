// Nav bar section js starts
const menuIcon = document.getElementById('menu-icon');
const dropdownMenu = document.getElementById('dropdown-menu');

menuIcon.addEventListener('click', function (){
  if (dropdownMenu.classList.contains('hidden')) {
    dropdownMenu.classList.remove('hidden');
    dropdownMenu.classList.add('dropdown-enter', 'dropdown-enter-active');
  } 
  else {
    dropdownMenu.classList.add('hidden');
    dropdownMenu.classList.remove('dropdown-enter', 'dropdown-enter-active');
  }
});
// Nav bar section js ends

// Donation section js starts 

// add event handler 
document.getElementById('btn-donation')
  .addEventListener('click', function(event){
    
    
    
    // adding money 
    const addDonationInput = document.getElementById('input-donation-money').value;
    
  });
  // get the current balance 
  const balance = document.getElementById('fund-balance').innerText;
  
  
// Donation section js ends 
