document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os ícones de modo escuro e modo claro
    const darkModeIcon = document.getElementById("dark_mode");
    const lightModeIcon = document.getElementById("light_mode");

    // Adiciona um ouvinte de evento de clique ao ícone de modo escuro
    darkModeIcon.addEventListener("click", function() {
        // Ativa o modo escuro
        document.body.classList.add("dark-mode");
        // Desativa o modo claro (caso esteja ativado)
        document.body.classList.remove("light-mode");
        // Oculta o ícone de modo escuro
        darkModeIcon.style.display = "none";
        // Mostra o ícone de modo claro
        lightModeIcon.style.display = "block";
    });

    // Adiciona um ouvinte de evento de clique ao ícone de modo claro
    lightModeIcon.addEventListener("click", function() {
        // Ativa o modo claro
        document.body.classList.add("light-mode");
        // Desativa o modo escuro (caso esteja ativado)
        document.body.classList.remove("dark-mode");
        // Oculta o ícone de modo claro
        lightModeIcon.style.display = "none";
        // Mostra o ícone de modo escuro
        darkModeIcon.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const configIcon = document.getElementById("config");
    const menuSuspenso = document.getElementById("menu-suspenso");
    const closeMenuBtn = document.getElementById("close-menu");

    configIcon.addEventListener("click", function() {
        toggleMenu();
    });

    closeMenuBtn.addEventListener("click", function() {
        toggleMenu();
    });

    function toggleMenu() {
        const menuVisible = menuSuspenso.style.right === "0px";
        menuSuspenso.style.right = menuVisible ? "-300px" : "0px";
    }
});

const fontSizeSlider = document.getElementById("font-size-slider");
const pElements = document.getElementsByTagName("p");

fontSizeSlider.addEventListener("input", function() {
const fontSize = fontSizeSlider.value + "px";
for (let i = 0; i < pElements.length; i++) {
pElements[i].style.fontSize = fontSize;
}
});