document.getElementById("login-btn").addEventListener("click", function() {
    const  mobileNumber = document.getElementById("input-number");
    const contactNumber = mobileNumber.value;

     const pinNumber = document.getElementById("input-pin");
    const pin = pinNumber.value;

    if(contactNumber.length !== 11 || pin.length !== 4) {
        alert("Please enter a valid mobile number and pin.");
    }
    else if (contactNumber === "01604908292" && pin === "1234") {
        alert("Login successful!");
        window.location.replace ("home.html"); // Redirect to dashboard page
    }
    else{
        alert("Given mobile number and pin is not valid. Please try again.");
        return;
    }
})
