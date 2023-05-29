let name = document.getElementById('name');
let otherJobRole = document.getElementById("other-job-role");
let jobRole = document.getElementById('title');
let design = document.getElementById('design');
let color = document.getElementById('color');
let activities = document.getElementById('activities');
let activitiesCost = document.getElementById('activities-cost');

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
