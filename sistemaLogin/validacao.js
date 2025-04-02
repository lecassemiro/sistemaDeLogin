// Função para validar o login
function validarLogin() {
    // Obtém os valores dos campos
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    // Verifica se o campo usuário está vazio
    if (usuario === "") {
        alert("Por favor, preencha o campo de usuário.");
        return; // Impede o avanço
    }

    // Verifica se o campo senha está vazio
    if (senha === "") {
        alert("Por favor, preencha o campo de senha.");
        return; // Impede o avanço
    }

    // Se ambos os campos estiverem preenchidos, avança
    alert("Login realizado com sucesso!"); // Pode substituir isso por algum comportamento desejado

    // Redireciona para a página 'login-realizado.html'
    window.location.href = "login-realizado.html";
}

// Função para validar o cadastro
function validarCadastro() {
    // Obtém os valores dos campos
    var usuario = document.getElementById('usuario').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Verifica se o campo usuário está vazio
    if (usuario === "") {
        alert("Por favor, preencha o campo de usuário.");
        return; // Impede o avanço
    }

    // Verifica se o campo email está vazio
    if (email === "") {
        alert("Por favor, preencha o campo de email.");
        return; // Impede o avanço
    }

    // Verifica se o campo senha está vazio
    if (senha === "") {
        alert("Por favor, preencha o campo de senha.");
        return; // Impede o avanço
    }

    // Redireciona para a página 'login-realizado.html'
    window.location.href = "../html/login-realizado.html";
}