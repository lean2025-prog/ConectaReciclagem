// No arquivo: pagina_reciclador.js (versão simplificada sem imagem)

// --- CONFIGURAÇÃO DO FIREBASE ---
const firebaseConfig = {
  apiKey: "SUA_API_KEY", // <-- IMPORTANTE: Substitua pela sua chave de API real
  authDomain: "conectareciclagem.firebaseapp.com",
  projectId: "conectareciclagem",
  storageBucket: "conectareciclagem.appspot.com",
  messagingSenderId: "106491447083",
  appId: "1:106491447083:web:1fd6117d59ed61cea8a76e"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let coletaSelecionadaId = null;

// --- FUNÇÃO PARA CARREGAR E EXIBIR AS COLETAS ---
async function carregarColetas() {
    const listaColetasDiv = document.getElementById("lista-coletas");
    listaColetasDiv.innerHTML = "<p>A carregar coletas...</p>";

    try {
        const querySnapshot = await db.collection("coletas_cidadaos").get();
        listaColetasDiv.innerHTML = "";

        if (querySnapshot.empty) {
            listaColetasDiv.innerHTML = "<p>Nenhuma coleta disponível no momento.</p>";
            return;
        }

        querySnapshot.forEach(doc => {
            const dados = doc.data();
            const coletaCard = document.createElement("div");
            coletaCard.className = "coleta-card";
            coletaCard.dataset.id = doc.id;
            
            // Monta o conteúdo do card (agora sem a parte da imagem)
            coletaCard.innerHTML = `
                <h3>Coleta de ${dados.tipoMaterial}</h3>
                <p><strong>Nome:</strong> ${dados.nome}</p>
                <p><strong>Endereço:</strong> ${dados.endereco}</p>
                <p><strong>Quantidade:</strong> ${dados.quantidade}</p>
            `;
            
            coletaCard.addEventListener('click', () => {
                const cardJaSelecionado = document.querySelector('.coleta-card.selecionado');
                if (cardJaSelecionado) {
                    cardJaSelecionado.classList.remove('selecionado');
                }
                coletaCard.classList.add('selecionado');
                coletaSelecionadaId = doc.id;
            });
            
            listaColetasDiv.appendChild(coletaCard);
        });

    } catch (erro) {
        console.error("Erro ao carregar coletas:", erro);
        listaColetasDiv.innerHTML = "<p>Ocorreu um erro ao carregar as coletas.</p>";
    }
}

// --- CÓDIGO PARA INTERATIVIDADE DO BOTÃO ---
const botaoAceitar = document.getElementById("botao_aceitar_coleta");

botaoAceitar.addEventListener('click', function() {
    if (coletaSelecionadaId) {
        alert(`Coleta ${coletaSelecionadaId} aceite! A redireccionar...`);
        localStorage.setItem("coletaAceiteId", coletaSelecionadaId);
        window.location.href = "parabens_reciclador.html";
    } else {
        alert("Por favor, selecione uma coleta da lista antes de aceitar.");
    }
});

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', carregarColetas);