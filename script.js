function login() {
    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Add debugging logs
    console.log("Username entered: " + username);
    console.log("Password entered: " + password);

    // Hardcoded credentials check (in real use case, authenticate with backend)
    if (username === "admin" && password === "password") {
        console.log("Login successful!");
        // Redirect to the main website after successful login
        window.location.href = "home.html";
    } else {
        console.log("Invalid credentials detected.");
        alert("Invalid credentials. Please try again.");
    }
}
