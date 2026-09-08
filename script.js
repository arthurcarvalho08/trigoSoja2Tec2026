const botaoTema = document.getElementById('botao-tema');

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
    
    if (document.body.classList.contains('modo-escuro')) {
        botaoTema.textContent = '☀️ Tema';
    } else {
        botaoTema.textContent = '🌙 Tema';
    }
});
