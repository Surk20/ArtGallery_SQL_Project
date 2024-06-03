document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin');
    const iconClose = document.querySelector('.icon-close');

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });
    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });
    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });
    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });

    // Validation rules
    const emailPattern = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number

    // Login form validation
    document.getElementById('login-form').addEventListener('submit', function(event) {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (!emailPattern.test(email)) {
            alert('Invalid email format. Ensure it starts with a letter and contains @.');
            event.preventDefault();
        } else if (!passwordPattern.test(password)) {
            alert('Password must be at least 8 characters long and contain at least one letter and one number.');
            event.preventDefault();
        }
    });

    // Registration form validation
    document.getElementById('register-form').addEventListener('submit', function(event) {
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        if (!emailPattern.test(email)) {
            alert('Invalid email format. Ensure it starts with a letter and contains @.');
            event.preventDefault();
        } else if (!passwordPattern.test(password)) {
            alert('Password must be at least 8 characters long and contain at least one letter and one number.');
            event.preventDefault();
        }
    });
});