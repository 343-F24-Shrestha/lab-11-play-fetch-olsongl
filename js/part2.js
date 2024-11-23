const userList = document.getElementById("user-list");

document.addEventListener("DOMContentLoaded", async () => {
    // This function should GET the first page of users from reqres.in.
    // The users should be displayed in the user-list element.
    // Each user should be in a new <div> with the user's first name, last name, and profile image.
    // The format should follow the example user in the HTML file.

    try {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const data = await response.json();

        const placeholder = document.querySelector(".placeholder");
        if (placeholder) {
            placeholder.remove();
        }

        data.data.forEach(user => {
            const userCard = document.createElement("div");
            userCard.className = "card";
            userCard.innerHTML = `
                <h2>${user.first_name} ${user.last_name}</h2>
                <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
            `;
            userList.appendChild(userCard);
        });
    } catch (error) {
        console.error("Error fetching users:", error.message);
        const placeholder = document.querySelector(".placeholder");
        if (placeholder) {
            placeholder.innerHTML = `<p>Error loading users. Please try again later.</p>`;
        }
    }
});