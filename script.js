// No arquivo: script.js

// Esta linha garante que o código só vai rodar depois que todo o HTML for carregado.
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Encontrar os botões no HTML
    // O JavaScript busca no HTML pelos elementos com os IDs que definimos.
    const botaoCidadao = document.getElementById('botao_cidadao');
    const botaoReciclador = document.getElementById('botao_reciclador');

    // 2. Adicionar uma ação de clique para o botão CIDADÃO
    // Aqui, dizemos: "Fique 'escutando' por um clique no botão do cidadão".
    botaoCidadao.addEventListener('click', function() {
        // Quando o clique acontecer, execute esta ação:
        console.log("Botão Cidadão clicado! Redirecionando...");
        window.location.href = 'pagina-cidadao.html'; 
    });

    // 3. Adicionar uma ação de clique para o botão RECICLADOR
    // A mesma coisa, mas para o outro botão.
    botaoReciclador.addEventListener('click', function() {
        // Quando o clique acontecer, execute esta ação:
        console.log("Botão Reciclador clicado! Redirecionando...");
        window.location.href = 'pagina-reciclador.html';
    });

});