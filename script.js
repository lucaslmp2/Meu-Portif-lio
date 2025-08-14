 const form = document.getElementById('contactForm');
    const messageBox = document.getElementById('formMessage');
    const submitButton = form.querySelector('button[type="submit"]'); // Get the submit button

    form.addEventListener('submit', async e => {
        e.preventDefault();
        messageBox.textContent = '';
        messageBox.style.color = ''; // Reset color
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        const honeypot = form.honeypot.value.trim(); // Capture honeypot value

        if (honeypot) { // If honeypot is filled, it's spam
            messageBox.textContent = 'Parece que houve um problema. Por favor, tente novamente.';
            messageBox.style.color = 'red';
            return;
        }

        if (!name || !email || !message) {
            messageBox.textContent = 'Por favor, preencha todos os campos obrigatórios.';
            messageBox.style.color = 'red';
            return;
        }

        submitButton.disabled = true; // Disable button
        messageBox.style.color = '#60a5fa';
        messageBox.textContent = 'Enviando mensagem...';

        try {
            // Simulate an API call or actual form submission
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay

            messageBox.textContent = 'Mensagem enviada com sucesso! Em breve entrarei em contato :)';
            messageBox.style.color = '#4CAF50'; // Green color for success
            form.reset();
        } catch (error) {
            messageBox.textContent = 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde.';
            messageBox.style.color = 'red';
            console.error('Erro no envio do formulário:', error);
        } finally {
            submitButton.disabled = false; // Re-enable button
        }
    });