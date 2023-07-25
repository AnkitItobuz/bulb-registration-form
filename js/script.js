// const submitButton = document.getElementById("submit-button");
const userName = document.getElementById("name");
const address = document.getElementById("address");
const dob = document.getElementById("dob");
const pincode = document.getElementById("pincode");
const emailId = document.getElementById("email-id");
const bulbContainer = document.getElementById("bulb-container");
const registrationForm = document.getElementById("registration-form");
const offBulb = document.getElementById("bulb-off");
const onnBulb = document.getElementById("bulb-onn");
// const resetButton = document.getElementById("reset-button");
const bulbSection = document.querySelector(".bulb-section");
const backButton = document.querySelector(".back-button");
const currUserName = document.querySelector(".user-name");
const backPage = document.querySelector(".back-page");
const onnCount = document.querySelector(".onn-count");
const offCount = document.querySelector(".off-count");



let totalOnnCount = 0;
let totalOffCount = 0;

function storeDataToDb(data) {
    localStorage.setItem('users', JSON.stringify(data));
}

function getDataFromDb() {
    const dbData = localStorage.getItem('users');
    if (dbData) {
      return JSON.parse(dbData)
    }
  
    return [];
  }

  const userDetails = getDataFromDb();

function addToDb(name, address, dob, pincode, emailId) {
    const userInfo = {
        name: name,
        address: address,
        dob: dob,
        pincode: pincode,
        emailId: emailId,
        id: new Date().getTime()
    };
    userDetails.push(userInfo);
    console.log(userDetails);
    storeDataToDb(userDetails);
    clearForm();

}
currUserName.innerHTML = userDetails[userDetails.length - 1].name;



function submitButton(){
    // submitButton.href = "../bulb.html";
    if (userName.value !== "" && address.value !== "" && dob.value !== "" && pincode.value !== "" && emailId.value !== "") {
       
        addToDb(userName.value, address.value, dob.value, pincode.value, emailId.value);
        return;
    }
    else {
        alert("All fields are mandatory!")
    }
}


function clearForm() {
    userName.value = "";
    address.value = "";
    dob.value = "";
    pincode.value = "";
    emailId.value = "";
}

function resetButton(){
    clearForm();

}

function onnButton() {
    onnBulb.classList.remove("hidden-items");
    offBulb.classList.add("hidden-items");
    totalOnnCount++;
    onnCount.innerHTML = totalOnnCount;
    document.querySelector(".onn-button").disabled = true;

    document.querySelector(".off-button").disabled = false;
   
}

function offButton() {
    onnBulb.classList.add("hidden-items");
    offBulb.classList.remove("hidden-items");
    totalOffCount++;
    offCount.innerHTML = totalOffCount;
    document.querySelector(".onn-button").disabled = false;

    document.querySelector(".off-button").disabled = true;
}

