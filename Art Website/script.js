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

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
    
            if (validateEmail(email) && validatePassword(password)) {
                alert('Login successful!');
                // Add your form submission logic here
            }
        });
    
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
    
            if (validateUsername(username) && validateEmail(email) && validatePassword(password)) {
                alert('Registration successful!');
                // Add your form submission logic here
            }
        });
    
        function validateEmail(email) {
            const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!re.test(email)) {
                alert('Please enter a valid email address.');
                return false;
            }
            return true;
        }
    
        function validatePassword(password) {
            if (password.length < 8) {
                alert('Password must be at least 8 characters long.');
                return false;
            }
            return true;
        }
    
        function validateUsername(username) {
            if (username.trim().length < 3) {
                alert('Username must be at least 3 characters long.');
                return false;
            }
            return true;
        }
    });
    