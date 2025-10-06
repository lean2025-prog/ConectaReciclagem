document.addEventListener('DOMContentLoaded', function() {
    // Pega o elemento h1 onde a mensagem vai aparecer
    const frase_cidadao = document.querySelector(".mensagem_de_parabens_cidadao");

    // Pega o nome do usuário que foi salvo no LocalStorage
    const nome = localStorage.getItem("nome_cidadao");

    // Atualiza o texto do h1
    frase_cidadao.innerText = `Olá ${nome}! Parabéns pela iniciativa em contribuir com a seleção consciente do seu lixo.`;
});

