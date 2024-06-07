
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyB2y3GiSIksMZjHpJUjPtjxnJASaNH6R9s",
    authDomain: "signup-and-login-95fc9.firebaseapp.com",
    projectId: "signup-and-login-95fc9",
    storageBucket: "signup-and-login-95fc9.appspot.com",
    messagingSenderId: "993220034688",
    appId: "1:993220034688:web:e7e1a46975a4add9b3e665"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
 

  //submit button
  const submit = document.getElementById('submit');

  submit.addEventListener("click",function(event){
    event.preventDefault()
 // inputs
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("creating account...")
    window.location.href = "Art.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  })