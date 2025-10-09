// No arquivo: pagina-cidadao.js (versão final sem imagem)

console.log("Script pagina-cidadao.js carregado com sucesso!");

// --- CONFIGURAÇÃO DO FIREBASE ---
const firebaseConfig = {
    apiKey: "SUA_API_KEY", // <-- VERIFIQUE SE ISTO FOI SUBSTITUÍDO PELA SUA CHAVE REAL
    authDomain: "conectareciclagem.firebaseapp.com",
    projectId: "conectareciclagem",
    storageBucket: "conectareciclagem.appspot.com",
    messagingSenderId: "106491447083",
    appId: "1:106491447083:web:1fd6117d59ed61cea8a76e"
};

// Inicializa os serviços do Firebase
try {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase inicializado com sucesso!");
} catch (e) {
    console.error("Erro ao inicializar o Firebase:", e);
    alert("ERRO GRAVE: A configuração do Firebase falhou. Verifique sua API Key.");
}

const db = firebase.firestore();

// --- CÓDIGO PARA INTERATIVIDADE DO FORMULÁRIO ---
const btnEnviar = document.getElementById("botao_enviar");

if (btnEnviar) {
    console.log("Botão 'ENVIAR' encontrado no HTML.");
    btnEnviar.addEventListener('click', () => {
        console.log("Botão 'ENVIAR' foi clicado.");

        // Pega os valores do formulário
        const nome = document.getElementById("nameinput").value;
        const contato = document.getElementById("contatoinput").value;
        const endereco = document.getElementById("enderecoinput").value;
        const tipoMaterial = document.getElementById("materialinput").value;
        const quantidade = document.getElementById("quantidadeinput").value;

        // Validação (agora sem o campo do arquivo)
        if (!nome || !contato || !endereco || !tipoMaterial || !quantidade) {
            console.log("Erro de validação: Faltam campos de texto.");
            alert("Por favor, preencha todos os campos.");
            return;
        }

        console.log("Formulário validado. A guardar no Firestore...");

        // Salva os dados de texto diretamente no Firestore
        db.collection("coletas_cidadaos").add({
            nome: nome,
            contato: contato,
            endereco: endereco,
            tipoMaterial: tipoMaterial,
            quantidade: quantidade,
            data_envio: new Date()
        })
        .then(() => {
            console.log("Informações guardadas no Firestore com sucesso!");
            
            localStorage.setItem("nome_cidadao", nome);
            
            console.log("A redirecionar para a página de parabéns...");
            window.location.href = "parabens_cidadao.html";
        })
        .catch((erro) => {
            console.error("### ERRO AO GUARDAR NO FIRESTORE ###", erro);
            alert("Ocorreu um erro ao enviar! Verifique o console (F12) para ver o erro detalhado em vermelho.");
        });
    });
} else {
    console.error("ERRO CRÍTICO: Botão com id 'botao_enviar' não foi encontrado no HTML.");
}