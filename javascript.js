// Abrir e fechar o popup de login
function abrirLogin() {
    document.getElementById("loginPopup").style.display = "flex";
}

function fecharLogin() {
    document.getElementById("loginPopup").style.display = "none";
}

// Fechar popup ao clicar fora do conteúdo para telas grandes
window.onclick = function(event) {
    var loginPopup = document.getElementById("loginPopup");
    var loginContent = document.querySelector('.login-content');

    if (event.target === loginPopup && !loginContent.contains(event.target)) {
        loginPopup.style.display = "none";
    }
}

// Toggle do menu de navegação para dispositivos móveis
function toggleMenu() {
    var menuNav = document.getElementById("menuNav");
    if (menuNav.style.display === "flex") {
        menuNav.style.display = "none";
    } else {
        menuNav.style.display = "flex";
    }
}

// Fechar menu ao clicar fora do menu ou em um link (apenas para celulares)
document.addEventListener('click', function(event) {
    var menuNav = document.getElementById("menuNav");
    var menuIcon = document.getElementById("menuIcon");
    var larguraTela = window.innerWidth;

    // Aplicar somente para celulares (largura máxima de 480px)
    if (larguraTela <= 480) {
        // Fechar o menu ao clicar em qualquer link da navegação
        if (menuNav.contains(event.target)) {
            menuNav.style.display = "none";
        }

        // Se o menu estiver aberto e o clique não for no menu nem no ícone do menu
        if (menuNav.style.display === "flex" && !menuNav.contains(event.target) && event.target !== menuIcon) {
            menuNav.style.display = "none";
        }
    }
});
