document.addEventListener('DOMContentLoaded', function() {
    const frase_reciclador = document.querySelector(".frase_parabens_reciclador");
    const nome_recicla = localStorage.getItem("Nome_Reciclador");
    frase_reciclador.innerText = `Olá, ${nome_recicla}! Parabéns pela iniciativa de contribuir para um mundo mais limpo!`;

     const botao_reciclador = document.getElementById('botao_inicio_reciclador');
    botao_reciclador.addEventListener('click', function() {
        window.location.href = 'index.html';
    })})