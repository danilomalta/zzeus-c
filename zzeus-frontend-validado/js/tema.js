document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.toggle');
    const body = document.querySelector('body');

    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light');
        toggle.classList.add('active');
    }

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        body.classList.toggle('light');
        localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
    });
});