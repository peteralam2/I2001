//dark mode enable/disable

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme')
const sideThemeSwitch = document.getElementById('side-theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

if(darkmode === "active") enableDarkmode()

  sideThemeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
  })


// Function to update the volume display
function updateVolume(value) {
    document.getElementById('volumeValue').textContent = value;
}

// Function to toggle notifications (you can implement your logic here)
function toggleNotifications() {
    const notificationsCheckbox = document.getElementById('notifications');
    console.log('Notifications enabled:', notificationsCheckbox.checked);
}

// Function to save settings (you can implement your logic here)
function saveSettings() {
    const volume = document.getElementById('volume').value;
    const notifications = document.getElementById('notifications').checked;
    console.log('Settings saved:', { volume, notifications });
}

// Load the saved theme from localStorage on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        const themeSelect = document.getElementById('theme');
        themeSelect.value = savedTheme;
        changeTheme(); // Apply the saved theme
    }
};

function updateVolume(value) {
    document.getElementById('volumeValue').innerText = value;
}

function toggleNotifications() {
    const notifications = document.getElementById('notifications').checked;
    if (notifications) {
        alert("Notifications enabled.");
    } else {
        alert("Notifications disabled.");
    }
}

function saveSettings() {
    const theme = document.getElementById('theme').value;
    const volume = document.getElementById('volume').value;
    const notifications = document.getElementById('notifications').checked;

    alert(`Settings saved:\nTheme: ${theme}\nVolume: ${volume}\nNotifications: ${notifications ? 'Enabled' : 'Disabled'}`);
}