let name = document.getElementById('name');
let otherJobRole = document.getElementById("other-job-role");
let jobRole = document.getElementById('title');
let design = document.getElementById('design');
let color = document.getElementById('color');
let activities = document.getElementById('activities');
let activitiesCost = document.getElementById('activities-cost');
let paymentMethod = document.getElementById("payment");
let email = document.getElementById("email");


let jsPuns = document.querySelectorAll('[data-theme="js puns"]');
let heartJs = document.querySelectorAll('[data-theme="heart js"]');



// const mainJS = document.getElementsByName('all')[0];
// const usLibs = document.getElementsByName('us-libs')[0];
// const node = document.getElementsByName('node')[0];
// const usFrameworks = document.getElementsByName('us-frameworks')[0];
// const buildTools = document.getElementsByName('buildTools')[0];
// const npm = document.getElementsByName('npm')[0];
// const express = document.getElementsByName('express')[0];


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
        color.selectedIndex = -1;
        heartJs.forEach((heartJsElement) => {
            heartJsElement.style.display = "none";
        }
        )
        jsPuns.forEach((jsPunsElement) => {
            jsPunsElement.style.display = "block";
        })
    } else {
        color.removeAttribute("disabled");
        color.selectedIndex = -1
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

function validateForm() {
        let regName = /[\S\s]+[\S]+/;
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let creditCard = /^\d{13,16}$/;
        let creditCardValue = document.getElementById("cc-num").value;
        let cvv = /^\d{3}$/
        let cvvValue = document.getElementById("cvv").value;
        let zip = /^\d{5}$/;
        let zipValue = document.getElementById("zip").value;
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
        if (!mailformat.test(email.value)) {
            email.parentNode.className = "not-valid";
            document.getElementById("email-hint").style.display = "block";
        } else {
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
            } else {
                document.getElementById("cc-hint").style.display = "none";
            }
            if (!cvv.test(cvvValue)) {
                document.getElementById("cvv-hint").style.display = "block";
            } else {
                document.getElementById("cvv-hint").style.display = "none";
            }
            if (!zip.test(zipValue)) {
                document.getElementById("zip-hint").style.display = "block";
            } else {
                document.getElementById("zip-hint").style.display = "none";
            }
        }
        if (regName.test(nameValue.value) && email.value.match(mailformat) && isTrue && creditCard.test(creditCardValue) && cvv.test(cvvValue) && zip.test(zipValue)) {
            return true;
        } else {
            return false
        }
      }
document.querySelector("button").addEventListener("click", e => {
    validateForm();
    e.preventDefault();
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







// DO THIS AFTER FOR NAME ERROR IN REAL TIME
//       function validateName(){
//         var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
//         var nameValue = document.getElementById('name').value;
//         if(!regName.test(nameValue)){
//             alert('Please enter your full name (first & last name).');
//             return false;
//         }else{
//             return true;
//         }
//     }
// name.addEventListener("focusout", );