const output = document.getElementById("output");

document.getElementById("get-btn").addEventListener("click", async () => {
    // This function should send a GET request to the echo endpoint and output the result
    // The two input fields should be included in the request URL as **query parameters**

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    try {
        const response = await fetch(`/echo?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`);
        const data = await response.json();
        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
});

document.getElementById("post-json-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as JSON
    // The two input fields should be included in the request body as **JSON data**

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    try {
        const response = await fetch('/echo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, age }),
        });
        const data = await response.json();
        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as form data
    // The two input fields should be included in the request body as **url-encoded data**

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('age', age);

    try {
        const response = await fetch('/echo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
        });
        const data = await response.json();
        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
});
