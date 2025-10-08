
frm.addEventListener("submit", (e) => e.preventDefault());    
const enviar = document.getElementById("botao_enviar");
enviar.addEventListener('click', function() {
    const nome = document.getElementById("nameinput").value;
    localStorage.setItem("nome_cidadao", nome);  // salva no LocalStorage
    window.location.href = "formulário coletado - cidadão.html"; // redireciona
});
