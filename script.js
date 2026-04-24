// Task 1: Verification Log
// Outputting "Status Manager Started to Console"
console.log("Status Manager Started");

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

// using innerhtml to change maintitle's text to "DOM Project: Ready!"
// document.getElementById("main-title").innerHTML = "DOM Project: Ready!";
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.
// document.getElementById("toggle-button").setAttribute(data-action,"status-toggle");

// adding a setattribute to toggleButton
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].

// highlightlistitems function
function highlightListItems(){

    // Console Logs for Debugging
    // console.log("bruzz");
    // console.log(document.querySelectorAll('li'));

    // creating an array for the list of the items that are an li element
    var itemList = document.querySelectorAll('li');
    
    // Console Logs for Debugging
    // console.log(itemList);
    
    // Looping through the list of items using for each where each element's .style.color is changed to blue
    itemList.forEach(element => {element.style.color = "blue"});
    
    // Console Logs for Debugging
    // console.log("bruh");
}

// Running the highlight list items function once
highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].

// //Task 5: The Toggle Function
// togglestatus function
// function toggleStatus(e){
//     // Toggling the hidden class for statusOutput 
//     statusOutput.classList.toggle(".hidden");
// }

// Event listener to toggle status
toggleButton.addEventListener("click", toggleStatus);

// // Task 6: Prevent Default Behavior
// togglestatus function
// function toggleStatus(e){
//     // Toggling the hidden class for statusOutput 
//     statusOutput.classList.toggle("hidden");
//     // using preventDefualt on event (e)
//     e.preventDefault();
// }

// Task 7: Inline Styles
// togglestatus function
function toggleStatus(e){
    // Toggling the hidden class for statusOutput 
    statusOutput.classList.toggle("hidden");
    // using preventDefualt on event (e)
    e.preventDefault();

    // If statusOutput DOES NOT have the hidden class applied 
    if(!statusOutput.classList.contains("hidden")){
        // set mainTitle background color to yellow
        mainTitle.style.backgroundColor = "yellow";
        // create a timestamp
        createTimestamp();
    }else{
        // else, reset the mainTitle background color
        mainTitle.style.backgroundColor = "";
    }
}

// Task 8: Dynamic Element Creation
// variable to make the status output time unique for the first one
var timeStampFirst = true;
// variable to count so i can add a breakpoint after the 4th span element is added (5th one on a new line)
var count = 0;

// createTimestamp function
function createTimestamp(){

    // was going to automatically clear the status output after a certain number of timestamps but don't think i should
    // if(count > 16){
    //     while(statusOutput.firstChild){
    //         statusOutput.removeChild(statusOutput.firstChild);
    //     }
    //     count = 0;
    //     timeStampFirst = true;
    // }

    // constructing a newspan
    const newSpan = document.createElement("span");
    // creating a new date object
    var date = new Date();
    // applying tolocaletimestring on the new date object created
    date = date.toLocaleTimeString();

    // if it is the first time stamp created, dont add the '>' (&gt;) and space (&nbsp;)
    if(timeStampFirst){
        newSpan.innerHTML = date;
        // updating the timestampfirst variable
        timeStampFirst = false;
    }else{
        // checking to see if we already have 4 span elements in the statusOutput
        if(count%4==0){
            // add a break if it is the 5th
            newSpan.innerHTML = "<br>&gt; " + date;
        }else{
            // don't add a break if it isnt the 5th
            newSpan.innerHTML = "  &nbsp;&nbsp;&nbsp;&nbsp;&gt; " + date;
        }
    }
    // update count variable (by 1)
    count++;
    // append the newspan to the statusoutput element
    statusOutput.appendChild(newSpan);
}
/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].

// start flashing function
function startFlashing(e){
    //Added Clear Interval here so it doesn't keep replacing intervals
    clearInterval(intervalId);
    // added prevent default to the event
    e.preventDefault();
    // setting the intervalID to the one created by toggling the hidden class on the controlpanel element every 500ms
    intervalId = setInterval(()=>(controlPanel.classList.toggle("hidden")), 500);
}
// stop flashing function
function stopFlashing(e){
    // clears interval on intervalId
    clearInterval(intervalId);
}

// event listeners for the timerButton element, click calls the startflashing and dblclick calls the stopflashing function
timerButton.addEventListener('click', this.startFlashing);
timerButton.addEventListener('dblclick', this.stopFlashing);