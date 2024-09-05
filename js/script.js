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

/*Botão para revelar a senha*/
const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function (e) {
        // Alterna o tipo de input entre 'password' e 'text'
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        // Alterna o ícone entre o olho aberto e fechado
        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    });



    document.addEventListener('DOMContentLoaded', () => {
        const profilePics = document.querySelectorAll('.profile-pic');  // Seleciona todas as fotos da galeria
        const selectedProfilePic = document.getElementById('selected-profile-pic');  // Foto de perfil selecionada
        const logoImg = document.getElementById('logo-img');  // Logo do site
    
        // Verifica se há uma foto salva no localStorage
        const savedPic = localStorage.getItem('selectedProfilePic');
    
        // Se houver uma foto salva no localStorage, altera a imagem "default" para a foto salva
        if (savedPic && savedPic !== "/image/logos/logo_branca.png") {
            selectedProfilePic.src = savedPic;  // Atualiza a exibição da foto de perfil com a foto salva
            logoImg.src = savedPic;  // Atualiza a logo com a mesma imagem
        }
    
        // Adiciona evento de clique para selecionar a foto de perfil
        profilePics.forEach(pic => {
            pic.addEventListener('click', () => {
                const selectedPicSrc = pic.getAttribute('src');  // Obtém o caminho da imagem clicada
                selectedProfilePic.src = selectedPicSrc;  // Atualiza a foto exibida em #selected-profile-pic
                logoImg.src = selectedPicSrc;  // Atualiza a logo com a nova imagem
                localStorage.setItem('selectedProfilePic', selectedPicSrc);  // Armazena a foto selecionada no localStorage
            });
        });
    });
    