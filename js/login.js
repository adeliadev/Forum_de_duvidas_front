document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        nomeDeUsuario: username,
        senha: password
    };

    fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            window.location.href = 'index.html';
        } else {
            return response.text().then(errorText => {
                throw new Error(errorText || 'Erro ao fazer login');
            });
        }
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
        alert(`Erro ao fazer login: ${error.message}`);
    });
});
