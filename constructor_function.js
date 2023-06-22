// BankAccount constructor function
class BankAccount {
    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }
}

  
  // // Array to store accounts
  // const accounts = [];
  
  // // Form and input elements
  // const accountForm = document.querySelector('#accountForm');
  // const customerNameInput = document.querySelector('#customerName');
  // const balanceInput = document.querySelector('#balance');
  
  // const depositForm = document.querySelector('#deposit');
  // const accountNumberInput = document.querySelector('#accountNumber');
  // const amountInput = document.querySelector('#amount');
  
  // // Event listener for creating a new account
  // accountForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   const account = new BankAccount(customerNameInput.value, +balanceInput.value);
  //   accounts.push(account);
  //   console.log(accounts);
  //   customerNameInput.value = "";
  //   balanceInput.value = "";
  // });
  
  // // Event listener for depositing amount
  // depositForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   const accountNumber = +accountNumberInput.value;
  //   const amount = +amountInput.value;
  
  //   const account = accounts.find((account) => account.accountNumber === accountNumber);
  //   if (account) {
  //     account.balance += amount;
  //     console.log(accounts);
  //   } else {
  //     console.log("Account not found!");
  //   }
  
  //   accountNumberInput.value = "";
  //   amountInput.value = "";
  // });
  


  //script for password generating using class

  class password{
    constructor(len, isSymbol, isNumber){
      this.len = len;
      this.isSymbol = isSymbol;
      this.isNumber = isNumber
    }
    generatePsswd(){
      var charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      if(this.isSymbol) charSet += '!@#$%^&*()_+{}:;/.,<>?'
      if(this.isNumber) charSet += '1234567890'

      let passwd = '';
      for (let i = 0; i<this.len; i++){
        const randomIndex = Math.floor(Math.random() * charSet.length)
        passwd += charSet.charAt(randomIndex);
      }
      return passwd;
    }
  }


  

  const generate = document.getElementById('generate');
  const length = document.getElementById('length');
  const isSymbol = document.getElementById('include-symbols');
  const isNumber = document.getElementById('include-numbers');
  const showpsswd = document.getElementById('password')
  const copybtn = document.getElementById('copy')

  let isSymbolChecked = false;
  let isNumberChecked = false;

  isSymbol.addEventListener('change', checkboxChanged);
  isNumber.addEventListener('change', checkboxChanged);

  function checkboxChanged(event){
    var checkbox = event.target;
    var isChecked = checkbox.checked;

    if (checkbox === isSymbol){
      isSymbolChecked = isChecked;
    } else if (checkbox === isNumber){
      isNumberChecked = isChecked;
    }
  }


 
  generate.addEventListener("click", ()=>{
    let pwd = new password(length.value, isSymbolChecked, isNumberChecked);
    let key = pwd.generatePsswd();
    showpsswd.value = key;
  })

  copybtn.addEventListener('click', ()=>{

  })



// Get the copy button element and the password input element
const copyButton = document.getElementById("copy");
const passwordInput = document.getElementById("password");

// Add click event listener to the copy button
copyButton.addEventListener("click", function () {
  // Select the text in the password input
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Deselect the text
  window.getSelection().removeAllRanges();

   // Show the popup
   popup.style.display = "block";

   // Hide the popup after 2 seconds
   setTimeout(function () {
     popup.style.display = "none";
   }, 2000);
});
