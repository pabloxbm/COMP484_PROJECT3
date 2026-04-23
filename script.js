// Task 1: Verification Log
console.log("Status Manager Started")

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";
// document.getElementById("main-title").innerHTML = "DOM Project: Ready!";
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.
// document.getElementById("toggle-button").setAttribute(data-action,"status-toggle");
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].
function highlightListItems(){
    // console.log("bruzz");
    // console.log(document.querySelectorAll('li'));
    var itemList = document.querySelectorAll('li');
    // console.log(itemList);
    itemList.forEach(element => {element.style.color = "blue"});
    // console.log("bruh");
}

highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].

// //Task 5: The Toggle Function
// function toggleStatus(e){
//     statusOutput.classList.toggle(".hidden")
// }
toggleButton.addEventListener("click", toggleStatus);

// // Task 6: Prevent Default Behavior
// function toggleStatus(e){
//     statusOutput.classList.toggle("hidden")
//     e.preventDefault();
// }

// Task 7: Inline Styles
function toggleStatus(e){
    statusOutput.classList.toggle("hidden")
    e.preventDefault();

    if(!statusOutput.classList.contains("hidden")){
        mainTitle.style.backgroundColor = "yellow";
        createTimestamp();
    }else{
        mainTitle.style.backgroundColor = "";
    }
}

// Task 8: Dynamic Element Creation
var timeStampFirst = true;
function createTimestamp(){

    const newSpan = document.createElement("span");
    var date = new Date();
    date = date.toLocaleTimeString();
    if(timeStampFirst){
        newSpan.innerHTML = date;
        timeStampFirst = false;
    }else{
        newSpan.innerHTML = "  &nbsp;&nbsp;&nbsp;&nbsp;&gt; " + date;
    }
    statusOutput.appendChild(newSpan)
}
/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].
function startFlashing(e){
    //Added Clear Interval here so it doesn't keep replacing intervals
    clearInterval(intervalId);
    e.preventDefault();
    intervalId = setInterval(()=>(controlPanel.classList.toggle("hidden")), 500);
}
function stopFlashing(e){
    clearInterval(intervalId);
}
timerButton.addEventListener('click', this.startFlashing);
timerButton.addEventListener('dblclick', this.stopFlashing);