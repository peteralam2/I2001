// Function to change the theme
function changeTheme() {
    const themeSelect = document.getElementById('theme');
    const selectedTheme = themeSelect.value;

    // Change the body class based on the selected theme
    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('.container').classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        document.querySelector('.container').classList.remove('dark');
    }

    // Save the selected theme in localStorage
    localStorage.setItem('theme', selectedTheme);
}

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