// Global Variables
let name = document.getElementById('name');
let otherJobRole = document.getElementById("other-job-role");
let jobRole = document.getElementById('title');
let design = document.getElementById('design');
let color = document.getElementById('color');
let activities = document.getElementById('activities');
let activitiesCost = document.getElementById('activities-cost');
let paymentMethod = document.getElementById("payment");
let email = document.getElementById("email");
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


let jsPuns = document.querySelectorAll('[data-theme="js puns"]');
let heartJs = document.querySelectorAll('[data-theme="heart js"]');


// Call the focus method on the name input to have it auto focus on page load
name.focus();


// Set display none to "other job role" on page load as it is not needed on page load
otherJobRole.style.display = "none";


// Function and event listener to display "other job role" section if "other" 
// is selected in "job role" select menu
function displayOtherJobRole() {
    if (jobRole.value == "other") {
        otherJobRole.style.display = "block";
    } else {
        otherJobRole.style.display = "none";
    }
}
jobRole.addEventListener("change", displayOtherJobRole)


// Functionality and Event Listener for Design and Color Section
color.setAttribute("disabled", true)
function designSelection() {
    if (design.value == "js puns") {
        color.removeAttribute("disabled");
        color.selectedIndex = 1;
        heartJs.forEach((heartJsElement) => {
            heartJsElement.style.display = "none";
        }
        )
        jsPuns.forEach((jsPunsElement) => {
            jsPunsElement.style.display = "block";
        })
    } else {
        color.removeAttribute("disabled");
        color.selectedIndex = 4;
        jsPuns.forEach((jsPunsElement) => {
            jsPunsElement.style.display = "none";
    })
    heartJs.forEach((heartJsElement) => {
        heartJsElement.style.display = "block";
    })
}
}
design.addEventListener("change", designSelection)


// Functionality/Event Listener to Update Total Cost with Selections Made
let currentCost = 0;
activities.addEventListener("change", (event) => {
    if (event.target.checked) {
        let selection = parseInt(event.target.getAttribute("data-cost"));
        let newCost = currentCost + selection;
        currentCost = newCost;
        let costHTML = 
        `
        Total: $${newCost}
        `
        activitiesCost.innerHTML = costHTML;
    } else {
        let selection = parseInt(event.target.getAttribute("data-cost"));
        let newCost = currentCost - selection;
        currentCost = newCost;
        let costHTML = 
        `
        Total: $${newCost}
        `
        activitiesCost.innerHTML = costHTML;
    }
})


// Functionaility and event listener for selecting the Payment Method Options
paymentMethod[1].setAttribute("selected", true);
document.getElementById("paypal").style.display = "none";
document.getElementById("bitcoin").style.display = "none";


function paymentMethodButton() {
    if (paymentMethod.value == "paypal") {
        document.getElementById("credit-card").style.display = "none"
        document.getElementById("bitcoin").style.display = "none"
        document.getElementById("paypal").style.display = "block"
    }
    if (paymentMethod.value == "bitcoin") {
        document.getElementById("credit-card").style.display = "none"
        document.getElementById("bitcoin").style.display = "block"
        document.getElementById("paypal").style.display = "none"
    }
    if (paymentMethod.value == "credit-card") {
        document.getElementById("credit-card").style.display = "block"
        document.getElementById("bitcoin").style.display = "none"
        document.getElementById("paypal").style.display = "none"
    }
}

paymentMethod.addEventListener("change", paymentMethodButton)

// Function to validate and event listener to submit the form
function validateForm() {
        let regName = /[\S\s]+[\S]+/;
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let creditCard = /^\d{13,16}$/;
        let creditCardValue = document.getElementById("cc-num").value;
        let creditCardInput = document.getElementById("cc-num");
        let cvv = /^\d{3}$/
        let cvvValue = document.getElementById("cvv").value;
        let cvvInput = document.getElementById("cvv");
        let zip = /^\d{5}$/;
        let zipValue = document.getElementById("zip").value;
        let zipInput = document.getElementById("zip");
        let nameValue = document.getElementById('name');
        const mainJS = document.getElementsByName('all')[0];
        const usLibs = document.getElementsByName('js-libs')[0];
        const node = document.getElementsByName('node')[0];
        const usFrameworks = document.getElementsByName('js-frameworks')[0];
        const buildTools = document.getElementsByName('build-tools')[0];
        const npm = document.getElementsByName('npm')[0];
        const express = document.getElementsByName('express')[0];
        let isTrue = false;
        if (mainJS.checked) {
            isTrue = true;
        }
        if (usLibs.checked) {
            isTrue = true;
        }
        if (node.checked) {
            isTrue = true;
        }
        if (usFrameworks.checked) {
            isTrue = true;
        }
        if (buildTools.checked) {
            isTrue = true;
        }
        if (npm.checked) {
            isTrue = true;
        }
        if (express.checked) {
            isTrue = true;
        }
        if (!regName.test(nameValue.value)) {
            nameValue.parentNode.className = "not-valid";
            document.getElementById("name-hint").style.display = "block";
        } else {
            nameValue.parentNode.className = "valid";
            document.getElementById("name-hint").style.display = "none";
        }
        if (email.value === "") {
            let emailBlank = 
            `
            <span id="email-blank" class="email-hint hint">Email address must not be empty</span>
            `
            document.getElementById("email-hint").insertAdjacentHTML("beforebegin", emailBlank);
            document.getElementById("email-blank").style.display = "block";
            email.parentNode.className = "not-valid";
        } else {
            document.getElementById("email-blank").style.display = "none";
        }
        if (!mailformat.test(email.value) && email.value !== "") {
            email.parentNode.className = "not-valid";
            document.getElementById("email-hint").style.display = "block";
        } else if (mailformat.test(email.value) && email.value !== ""){
            email.parentNode.className = "valid";
            document.getElementById("email-hint").style.display = "none";
        }
        if (!isTrue) {
            mainJS.parentNode.parentNode.parentNode.classList.add("not-valid");
            document.getElementById("activities-hint").style.display = "block";
        } else {
            mainJS.parentNode.parentNode.parentNode.classList.remove("not-valid");
            mainJS.parentNode.parentNode.parentNode.classList.add("valid");
            document.getElementById("activities-hint").style.display = "none";
        }
        if (paymentMethod.value == "credit-card"){
            if (!creditCard.test(creditCardValue)) {
                document.getElementById("cc-hint").style.display = "block";
                creditCardInput.parentNode.className = "not-valid";
            } else {
                document.getElementById("cc-hint").style.display = "none";
                creditCardInput.parentNode.classList.remove("not-valid");
                creditCardInput.parentNode.className = "valid";
            }
            if (!cvv.test(cvvValue)) {
                document.getElementById("cvv-hint").style.display = "block";
                cvvInput.parentNode.className = "not-valid";
            } else {
                document.getElementById("cvv-hint").style.display = "none";
                cvvInput.parentNode.classList.remove("not-valid");
                cvvInput.parentNode.className = "valid";
            }
            if (!zip.test(zipValue)) {
                document.getElementById("zip-hint").style.display = "block";
                zipInput.parentNode.className = "not-valid";
            } else {
                document.getElementById("zip-hint").style.display = "none";
                zipInput.parentNode.classList.remove("not-valid");
                zipInput.parentNode.className = "valid";
            }
        }
        if (paymentMethod.value == "credit-card" && regName.test(nameValue.value) && email.value.match(mailformat) && isTrue && creditCard.test(creditCardValue) && cvv.test(cvvValue) && zip.test(zipValue) && email.value !== "") {
            return true;
        } 
        if (paymentMethod.value !== "credit-card" && regName.test(nameValue.value) && email.value.match(mailformat) && isTrue && email.value !== "") {
            return true;
        }
        else {
            return false
        }
      }
document.querySelector("form").addEventListener("submit", e => {
    if (!validateForm()) {
        e.preventDefault();
    validateForm();
    
}
});

// ACTIVITIES SECTION BLUR AND FOCUS FUNCTIONALITY

let checkboxInput = document.querySelectorAll("[type='checkbox']");;
for (let i = 0; i < checkboxInput.length; i++) {
    checkboxInput[i].addEventListener("focus", (e) => {
        e.target.parentNode.className = "focus";
    });
    checkboxInput[i].addEventListener("blur", (e) => {
        e.target.parentNode.classList.remove("focus");
    });
}

// Functionality for non-conflicting time slots feature
let activitiesBox = document.getElementById("activities-box");

for (let i = 1; i < activitiesBox.children.length -1 ; i++){


activitiesBox.children[i].childNodes[1].addEventListener("click", e => {

    for (let i = 1; i < activitiesBox.children.length; i++) {
        if (e.target.parentNode.parentNode.children[i].firstChild.nextElementSibling !== e.target && e.target.parentNode.parentNode.children[i].children[2].innerText == e.target.parentNode.children[2].innerText && e.target.checked) {
            e.target.parentNode.parentNode.children[i].children[0].disabled = true;
            e.target.parentNode.parentNode.children[i].className = "disabled";
    } else if (e.target.parentNode.parentNode.children[i].firstChild.nextElementSibling !== e.target && e.target.parentNode.parentNode.children[i].children[2].innerText == e.target.parentNode.children[2].innerText && !e.target.checked) {
        e.target.parentNode.parentNode.children[i].children[0].disabled = false;
            e.target.parentNode.parentNode.children[i].classList.remove("disabled");
    }
    }
});
}


// Conditional Error for Email Input
function validateEmail() {
    if (!mailformat.test(email.value) && email.value !== "") {
        email.parentNode.className = "not-valid";
        document.getElementById("email-hint").style.display = "block";
        document.getElementById("email-blank").style.display = "none";
    } else if ((email.value === "")){
        let emailBlank = 
        `
        <span id="email-blank" class="email-hint hint">Email address must not be empty</span>
        `
        
        document.getElementById("email-hint").insertAdjacentHTML("beforebegin", emailBlank);
        document.getElementById("email-blank").style.display = "block";
        document.getElementById("email-hint").style.display = "none";
        email.parentNode.className = "not-valid";
    } else {
        email.parentNode.className = "valid";
        document.getElementById("email-hint").style.display = "none";
        document.getElementById("email-blank").style.display = "none";
    }
}

email.addEventListener("keyup", validateEmail);

