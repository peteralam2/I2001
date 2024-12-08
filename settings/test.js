function changeTheme() {
    const theme = document.getElementById('theme').value;
    if (theme === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('.container').classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        document.querySelector('.container').classList.remove('dark');
    }
}

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