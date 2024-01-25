function submitForm() {
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Save form data to local storage
    var formData = { email, phone, message };
    localStorage.setItem('formData', JSON.stringify(formData));

    // Here, we're just logging the data for demonstration purposes
    console.log('Form submitted:', formData);

    
}
