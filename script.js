"use strict"
// Elements
const form = document.querySelector("form");
const userEmail = document.querySelector("input");
const submit = document.querySelector("button");
const errorMessage = document.querySelector("#invalid-email");

//Event Listener 
userEmail.addEventListener("blur", function (e) {
    e.preventDefault();
    if (userEmail.validity.valid) {
        userEmail.style.borderColor = "var(Gray)";
        errorMessage.textContent = "";
    } else {
        userEmail.style.borderColor = "var(--LightRed)";
        errorMessage.textContent = "Please provide a valid email address";
    }
});
