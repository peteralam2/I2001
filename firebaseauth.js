 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
 import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";


 const firebaseConfig = {
    apiKey: "AIzaSyCHgXFgXvA9rJhQH-3wYMRvy2AFzGh8G_k",

    authDomain: "project-48091.firebaseapp.com",

    projectId: "project-48091",

    storageBucket: "project-48091.firebasestorage.app",

    messagingSenderId: "39347073069",

    appId: "1:39347073069:web:7140b4bd3e6e9091fb48a4",

    measurementId: "G-GF6GMK2CDN",
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }
 const signUp=document.getElementById('submitSignUp');
 signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('rEmail').value;
    const password=document.getElementById('rPassword').value;
    const firstName=document.getElementById('fName').value;
    const lastName=document.getElementById('lName').value;

    const auth=getAuth();
    const db=getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userData={
            email: email,
            firstName: firstName,
            lastName:lastName
        };
        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef=doc(db, "users", user.uid);
        setDoc(docRef,userData)
        .then(()=>{
            window.location.href='login.html';
        })
        .catch((error)=>{
            console.error("error writing document", error);

        });
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode=='auth/email-already-in-use'){
            showMessage('Email Address Already Exists !!!', 'signUpMessage');
        }
        else{
            showMessage('unable to create User', 'signUpMessage');
        }
    })
 });

 const signIn=document.getElementById('submitSignIn');
 signIn.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const auth=getAuth();

    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential)=>{
        showMessage('login is successful', 'signInMessage');
        const user=userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href='main.html';
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode==='auth/invalid-credential'){
            showMessage('Incorrect Email or Password', 'signInMessage');
        }
        else{
            showMessage('Account does not Exist', 'signInMessage');
        }
    })
 })

// Forgot Password Functionality
const forgotPasswordLink = document.getElementById('forgotPassword'); 

forgotPasswordLink.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value; 

    if (!email) {
        showMessage('Please enter your email address.', 'signInMessage');
        return;
    }
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
        .then(() => {
            showMessage('Password reset email sent. Check your inbox.', 'signInMessage');
        })
        .catch((error) => {
            console.error('Error sending reset email:', error);
            if (error.code === 'auth/user-not-found') {
                showMessage('No user found with this email.', 'signInMessage');
            } else {
                showMessage('Failed to send reset email. Try again later.', 'signInMessage');
            }
        });
});
