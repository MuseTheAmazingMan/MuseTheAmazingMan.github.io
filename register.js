function registerUser() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Save user data to local storage
    var userData = { email, password };
    localStorage.setItem('userData', JSON.stringify(userData));

    // Redirect to login page (replace 'login.html' with your actual login page)
    window.location.href = 'login.html';
}

function loginUser() {
    var storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        var userData = JSON.parse(storedUserData);
        var enteredEmail = document.getElementById('loginEmail').value;
        var enteredPassword = document.getElementById('loginPassword').value;

        if (enteredEmail === userData.email && enteredPassword === userData.password) {
            // Login successful, redirect to the original page (replace 'original.html' with your actual page)
            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password');
        }
    } else {

        alert('No user registered. Please register first.');
    }
}
