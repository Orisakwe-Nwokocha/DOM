const form =  document.forms["form"];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("dropdown").value;

    const requestData = {
        username, password, role
    };

    async function registerUser() {
        try {
            const response = await fetch("http://localhost:8080/user/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });

            const responseData = await response.json();

            if (responseData.successful) {
                alert('Registration successful.');

                let userId = responseData.data.id;
                let username = responseData.data.username;
                console.log(`UserId: ${userId}, Password: ${username}`);

                document.querySelector(".first-response").textContent = userId.toString();
                document.querySelector(".second-response").textContent = username.toString();
            } else {
                alert('Registration failed. Please try again.');
                console.log(responseData);

                document.querySelector(".first-response").textContent = responseData.data.toString();
            }
        } catch (error) {
            console.error('Registration failed:', error);
            alert('Registration failed. Please try again.');
        }
    }

    registerUser();

});
