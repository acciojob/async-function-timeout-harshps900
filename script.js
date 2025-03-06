//your JS code here. If required.
// Get references to HTML elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const outputDiv = document.getElementById("output");

// Function to create a delay using Promise
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async function to handle message display
async function showMessage() {
    const message = textInput.value;
    const delayTime = parseInt(delayInput.value);

    // Check for valid input
    if (!message || isNaN(delayTime) || delayTime < 0) {
        outputDiv.innerText = "Please enter valid text and delay time!";
        return;
    }

    outputDiv.innerText = "Waiting...";

    // Wait for the specified delay
    await delay(delayTime);

    // Show the message after the delay
    outputDiv.innerText = message;
}

// Add click event listener to the button
btn.addEventListener("click", showMessage);

// Ready to test! Let me know if you want any adjustments 🚀
