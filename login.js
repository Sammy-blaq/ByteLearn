const login = document.querySelector('.btn-login-container');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Create elements to show the error messages
const emailError = document.querySelector('.emailError');
const passwordError = document.querySelector('.passwordError');

login.addEventListener('click', (e) => {
    e.preventDefault();

    let isValid = true;

    // Regular expression to validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validate email
    if (email.value.trim() === '') {
        isValid = false;
        emailError.textContent = "Email cannot be empty.";
        emailError.style.display = 'block';
        email.classList.add('invalid'); 
    } else if (!emailPattern.test(email.value)) {
        isValid = false;
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = 'block';
        email.classList.add('invalid'); 
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
        email.classList.remove('invalid'); 
    }

    // Regular Expression to validate password
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate password
    if (password.value.trim() === '') {
        isValid = false;
        passwordError.textContent = "Password cannot be empty.";
        passwordError.style.display = 'block';
        password.classList.add('invalid');
    } else if (!passwordPattern.test(password.value)) {
        isValid = false;
        passwordError.textContent = "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
        passwordError.style.display = 'block';
        password.classList.add('invalid');
    } else {
        passwordError.textContent = '';
        passwordError.style.display = 'none';
        password.classList.remove('invalid');
    }

    // If validation passes, redirect to home page
    if (isValid) {
        window.location.href = 'home.html';
    }
});
