function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return;
    }

    const usersInfo = JSON.parse(localStorage.getItem('usersInfo')) || {};

    if (usersInfo.hasOwnProperty(username)) {
        if (usersInfo[username] === password) {
            localStorage.setItem('isLoggedIn', 'true');
            alert('Welcome back, ' + username + '!');
            showLoggedInUI(username);
        } else {
            alert('Invalid password');
        }
    } else {
        usersInfo[username] = password;
        localStorage.setItem('usersInfo', JSON.stringify(usersInfo));
        localStorage.setItem('isLoggedIn', 'true');
      
        alert('Welcome, ' + username + '!');
      
        showLoggedInUI(username);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        showLoggedInUI();
    } else {
        showLoggedOutUI();
    }
});
function showLoggedInUI(username) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('logout').style.display = 'block';
    document.getElementById('user').textContent = username;
}

function showLoggedOutUI() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('logout').style.display = 'none';
    document.getElementById('user').textContent = '';
}
function handleLogout() {
    localStorage.setItem('isLoggedIn', 'false');
    showLoggedOutUI();
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

