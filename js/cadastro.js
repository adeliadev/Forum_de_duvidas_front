document.getElementById('register').addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeDeUsuario = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const data = {
        nomeDeUsuario: nomeDeUsuario,
        email: email,
        senha: senha
    };

    fetch('http://localhost:8080/api/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'login.html';
        } else {
            return response.text().then(errorText => {
                throw new Error(errorText || 'Erro ao cadastrar usuário');
            });
        }
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
        alert(`Erro ao cadastrar usuário: ${error.message}`);
    });
});
