const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".password-toggle-icon i");
const link = document.getElementById("Submitlink"); // could not use the button way since submit was implemented in the html as <a>

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
});

link.addEventListener('click', (event) => {
    // Prevent default link behavior
    event.preventDefault();

    // Check if the password field is not empty
    if (passwordField.value.trim() !== "") {
        window.location.href = "index.html";
    } else {
        // Handle empty password field
        alert("Please enter a password.");
    }
});



//this part is specified to the personal id page


// Store user information in local storage
function storeUsername() {
  const usernameInput = document.getElementById('usernameInput');
  const username = usernameInput.value;

  localStorage.setItem('username', username);
}


// Retrieve and display user information
const username = localStorage.getItem('username');
const password = localStorage.getItem('password');


document.getElementById('username').textContent = username;
document.getElementById('password').textContent = password;
