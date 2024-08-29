document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os ícones de modo escuro e modo claro
    const darkModeIcon = document.getElementById("dark_mode");
    const lightModeIcon = document.getElementById("light_mode");
    //botão de acionamento entre os dois temas
    const buttonClicked = document.getElementById("buttonClicked");

    // Elementos do logo
    const logoImg = document.getElementById('logo-img');
    const lightModeLogo = '/image/logos/logo_preta.png';
    const darkModeLogo = '/image/logos/logo_branca.png';

    // Define o tema como dark-mode ao carregar a página
    let temaAtual = localStorage.getItem('tema') || 'dark-mode';
    document.body.classList.add('dark-mode');
    logoImg.src = darkModeLogo;
    darkModeIcon.style.display = "none";
    lightModeIcon.style.display = "block";

    // Alterna entre temas ao clicar no botão
    buttonClicked.addEventListener("click", function () {
        if (temaAtual === "light-mode") {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
            logoImg.src = darkModeLogo;
            temaAtual = "dark-mode";
            darkModeIcon.style.display = "none";
            lightModeIcon.style.display = "block";

        } else {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
            logoImg.src = lightModeLogo;
            temaAtual = "light-mode";
            darkModeIcon.style.display = "block";
            lightModeIcon.style.display = "none";
        }

        // Salva o tema no localStorage para que comece sempre no darkMode
        localStorage.setItem('tema', temaAtual);
    });

    // Código para abrir e fechar o menu suspenso
    const configIcon = document.getElementById("config");
    const menuSuspenso = document.getElementById("menu-suspenso");
    const closeMenuBtn = document.getElementById("close-menu");

    configIcon.addEventListener("click", function () {
        toggleMenu();
    });

    closeMenuBtn.addEventListener("click", function () {
        toggleMenu();
    });

    function toggleMenu() {
        const menuVisible = menuSuspenso.style.right === "0px";
        menuSuspenso.style.right = menuVisible ? "-300px" : "0px";
    }

    // Controle do tamanho da fonte dos elementos <p>
    const fontSizeSlider = document.getElementById("font-size-slider");
    const pElements = document.getElementsByTagName("p");

    fontSizeSlider.addEventListener("input", function () {
        const fontSize = fontSizeSlider.value + "px";
        for (let i = 0; i < pElements.length; i++) {
            pElements[i].style.fontSize = fontSize;
        }
    });
});
