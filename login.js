const eyeIcon = document.querySelector('.fa-eye');
const passwordInput = document.getElementById('passwordInput');

eyeIcon.addEventListener('click', () => {  //adjusting eye activity in password
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
});


const form = document.querySelector('form');

form.addEventListener('submit', (event) => { //in case one field is not given 
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('passwordInput').value.trim();

  if (username === '' || password === '') {
    event.preventDefault(); // Prevent form submission
    alert('Please fill in both username and password fields!');
  }
});