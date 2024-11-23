const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');

document.getElementById('api-1-btn').addEventListener('click', async () => {
    // Make a request to your first API here. Put the response's data in output-1.
    // If your response has no body, put the status code in output-1.

    try {
        const response = await fetch('https://api.example1.com/resource'); // Replace with your API URL
        const data = await response.json();
        output1.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output1.textContent = `Error: ${error.message}`;
    }
});

document.getElementById('api-2-btn').addEventListener('click', async () => {
    // Make a request to your second API here. Put the response's data in output-2.
    // If your response has no body, put the status code in output-2.
    
    try {
        const response = await fetch('https://api.example2.com/resource'); // Replace with your API URL
        const data = await response.json();
        output2.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output2.textContent = `Error: ${error.message}`;
    }
});
