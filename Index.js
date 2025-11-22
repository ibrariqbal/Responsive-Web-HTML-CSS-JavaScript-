const modal = document.getElementById('modalForm');
const btn = document.querySelector('.btn'); 
const closeBtn = document.querySelector('.close');

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const switchToLogin = document.getElementById('switchToLogin');
const switchToRegister = document.getElementById('switchToRegister');


btn.addEventListener('click', () => {
    modal.style.display = 'flex';
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

switchToLogin.addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});
switchToRegister.addEventListener('click', () => {
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

const mobileMenuBtn = document.querySelector('.Mobile-menu');
const navLinks = document.querySelector('.inner-nav2');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
