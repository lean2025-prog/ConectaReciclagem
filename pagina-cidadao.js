  const enviar = document.getElementById("botao_enviar");
enviar.addEventListener('click', function() {
    const nome = document.getElementById("nameinput").value;
    localStorage.setItem("nome_cidadao", nome);  // salva no LocalStorage
    window.location.href = "parabens_cidadao.html"; // redireciona
});
