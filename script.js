// Script para alternar tema (claro/escuro)
const button = document.querySelector("#button");
console.log(button); // Exibe o botão no console para depuração

// Seleciona a imagem do ícone dentro do botão
const icon = document.getElementsByClassName("icon")[0];

// Adiciona um evento de clique ao botão para alternar o tema
button.addEventListener("click", () => {
    // Seleciona o elemento principal da página de login
    const main = document.getElementById('main-login');

    // Seleciona a imagem SVG
    const svg = document.getElementsByClassName('svg')[0];

    // Verifica se o ícone atual é o do sol (modo escuro)
    if (icon.src === "https://cdn0.iconfinder.com/data/icons/phosphor-fill-vol-4/256/sun-fill-256.png") {
        // Muda o ícone para a lua (modo claro)
        icon.src = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-moon-256.png";
        icon.style = "filter: none;"; // Remove a inversão de cor

        // Adiciona a classe 'light' para ativar o modo claro
        main.classList.add('light');

        // Troca a imagem para a versão clara
        svg.src = '../images/Astronaut-bro-light.svg';

    } else {
        // Se o ícone for o da lua, muda de volta para o sol (modo escuro)
        icon.src = "https://cdn0.iconfinder.com/data/icons/phosphor-fill-vol-4/256/sun-fill-256.png";
        icon.style = "filter: invert(1);"; // Inverte as cores do ícone

        // Remove a classe 'light' para voltar ao modo escuro
        main.classList.remove('light');

        // Troca a imagem para a versão escura
        svg.src = '../images/Astronaut-bro.svg';
    }
});


