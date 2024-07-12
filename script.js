document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os ícones de modo escuro e modo claro
    const darkModeIcon = document.getElementById("dark_mode");
    const lightModeIcon = document.getElementById("light_mode");
    //botão de acionamento entre os dois temas
    const buttonClicked = document.getElementById("buttonClicked");

    temaAtual = "light-mode";
    buttonClicked.addEventListener("click", function () {
        //alternar entre os temas
        if (temaAtual == "light-mode") {
            //ativar o modo escuro
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
            temaAtual = "dark-mode";

        } else {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
            temaAtual = "light-mode";
        }

        // Adiciona um ouvinte de evento de clique ao botão de tema
        buttonClicked.addEventListener("click", function () {
            alternarTema();
        });

        // Chama a função para definir o ícone inicial com base no tema atual
        if (temaAtual === "light-mode") {
            darkModeIcon.style.display = "block";
            lightModeIcon.style.display = "none";
        } else {
            lightModeIcon.style.display = "block";
            darkModeIcon.style.display = "none";
        }
    });


});



document.addEventListener("DOMContentLoaded", function () {
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
});

const fontSizeSlider = document.getElementById("font-size-slider");
const pElements = document.getElementsByTagName("p");

fontSizeSlider.addEventListener("input", function () {
    const fontSize = fontSizeSlider.value + "px";
    for (let i = 0; i < pElements.length; i++) {
        pElements[i].style.fontSize = fontSize;
    }
});






