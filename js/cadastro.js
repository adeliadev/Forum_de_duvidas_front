document.getElementById('register').addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeDeUsuario = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Formata os dados como application/x-www-form-urlencoded
    const data = new URLSearchParams();
    data.append('nomeDeUsuario', nomeDeUsuario);
    data.append('email', email);
    data.append('senha', senha);

    fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data.toString() // Converte os dados para o formato x-www-form-urlencoded
    })
    .then(response => {
        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'login.html'; // Redireciona para a página de login após o cadastro
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
