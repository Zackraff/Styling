document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');
    const validUsername = 'Zaki'; // Set your desired username here
    const validPassword = '123'; // Set your desired password here
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        if (usernameInput === validUsername && passwordInput === validPassword) {
            window.location.href = "file:///E:/Kampus/Html/Juice%20Choklatch/Juice%20Choklatch.html";
        } else {
            errorMessage.classList.add('visible');
            setTimeout(() => {
                errorMessage.classList.remove('visible');
            }, 2000); // Duration the message is visible
        }
    });
});
