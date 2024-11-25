// Função para criar uma postagem
async function criarPostagem(titulo) {
    const data = { titulo: titulo };
    try {
        const response = await fetch('http://localhost:8080/api/pesquisas/postar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Erro ao criar postagem');
        }

        const result = await response.json();
        console.log('Postagem criada com sucesso:', result);
    } catch (error) {
        console.error('Erro ao criar postagem:', error);
    }
}

// Função para buscar sugestões de postagens
async function buscarSugestoes(query) {
    try {
        const response = await fetch(`http://localhost:8080/api/pesquisas/sugestoes?query=${encodeURIComponent(query)}`);
        
        if (!response.ok) {
            throw new Error('Erro ao buscar sugestões');
        }
        
        const sugestoes = await response.json();
        return sugestoes; // Retorna as sugestões
    } catch (error) {
        console.error('Erro ao buscar sugestões:', error);
        return [];
    }
}

// Função para buscar histórico de postagens
async function buscarHistorico() {
    try {
        const response = await fetch('http://localhost:8080/api/pesquisas/historico');
        
        if (!response.ok) {
            throw new Error('Erro ao buscar histórico');
        }
        
        const historico = await response.json();
        return historico; // Retorna o histórico
    } catch (error) {
        console.error('Erro ao buscar histórico:', error);
        return [];
    }
}

// Função para exibir as sugestões na tela
function exibirSugestoes(sugestoes) {
    const searchResult = document.getElementById('search_result');
    searchResult.innerHTML = ''; // Limpa os resultados anteriores

    sugestoes.forEach(sugestao => {
        const div = document.createElement('div');
        div.classList.add('suggestion-item');
        div.textContent = sugestao.titulo; // Exibe o título da sugestão
        searchResult.appendChild(div);
    });

    // Mostra a caixa de sugestões
    searchResult.style.display = 'block';
}

// Função para carregar sugestões conforme o usuário digita
async function load_data(query) {
    const searchResult = document.getElementById('search_result');

    if (query.length > 0) {
        const sugestoes = await buscarSugestoes(query);
        exibirSugestoes(sugestoes);
    } else {
        searchResult.innerHTML = ''; // Limpa os resultados se a busca for muito curta
        searchResult.style.display = 'none'; // Esconde a caixa
    }
}

// Função para carregar o histórico de postagens e exibir
async function load_search_history() {
    const historico = await buscarHistorico();
    const searchResult = document.getElementById('search_result');
    searchResult.innerHTML = ''; // Limpa os resultados anteriores

    historico.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('history-item');
        div.textContent = item.titulo; // Exibe o título do histórico
        searchResult.appendChild(div);
    });

    // Mostra o histórico
    searchResult.style.display = 'block';
}

// Exemplo de uso da função para criar uma postagem
criarPostagem('Nova Postagem de Teste');

// Exemplo de uso da função para buscar sugestões
document.getElementById('search_box').addEventListener('keyup', function(event) {
    load_data(event.target.value); // Carrega sugestões conforme o usuário digita
});

// Esconde a caixa de sugestões ao clicar fora
document.addEventListener('click', function (event) {
    const searchResult = document.getElementById('search_result');
    const searchBox = document.getElementById('search_box');
  
    // Verifica se o clique foi fora da caixa de resultados e do campo de pesquisa
    if (!searchResult.contains(event.target) && !searchBox.contains(event.target)) {
        searchResult.style.display = 'none';
    }
});

// Mostra a caixa de sugestões ao focar no campo de pesquisa
document.getElementById('search_box').addEventListener('focus', function () {
    const searchResult = document.getElementById('search_result');
    if (searchResult.innerHTML.trim() !== '') {
        searchResult.style.display = 'block';
    }
});
