document.addEventListener('DOMContentLoaded', () => {
    const companyCards = document.querySelectorAll('.company-card');
    const companyForms = document.querySelectorAll('.company-form');
    const paymentForm = document.getElementById('payment-form');

    companyCards.forEach(card => {
        card.addEventListener('click', () => {
            companyForms.forEach(form => form.classList.remove('active'));
            paymentForm.classList.remove('active');
            document.getElementById(`${card.dataset.type}-form`).classList.add('active');
        });
    });

    document.querySelectorAll('.continue-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            companyForms.forEach(form => form.classList.remove('active'));
            paymentForm.classList.add('active');
        });
    });

    paymentForm.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = 'pages/configuracao.html';
    });
});