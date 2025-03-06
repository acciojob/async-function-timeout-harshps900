
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showMessageAfterDelay() {
    const textInput = document.getElementById('text').value;
    const delayInput = document.getElementById('delay').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = '';
    if (!textInput || isNaN(delayInput) || delayInput <= 0) {
        outputDiv.innerText = 'Please enter a valid message and delay time.';
        return;
    }

    // Show loading message
    outputDiv.innerText = 'Waiting...';

    await delay(parseInt(delayInput));

   
    outputDiv.innerText = textInput;
}
const btn = document.getElementById('btn');
btn.addEventListener('click', showMessageAfterDelay);
