document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito de scroll para o header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = '#fff';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Menu mobile toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Funcionalidade para o currículo interativo
    const profileImage = document.getElementById('profile-image');
    const curriculumPanel = document.getElementById('curriculum-panel');
    const panelClose = document.querySelector('.panel-close');
    
    // Criar overlay para o corpo
    const bodyOverlay = document.createElement('div');
    bodyOverlay.className = 'body-overlay';
    document.body.appendChild(bodyOverlay);
    
    // Abrir o painel de currículo ao clicar na imagem
    if (profileImage && curriculumPanel) {
        profileImage.parentElement.addEventListener('click', function() {
            curriculumPanel.classList.add('active');
            bodyOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Impedir rolagem do body
        });
    }
    
    // Fechar o painel ao clicar no botão de fechar
    if (panelClose) {
        panelClose.addEventListener('click', function() {
            curriculumPanel.classList.remove('active');
            bodyOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restaurar rolagem do body
        });
    }
    
    // Fechar o painel ao clicar no overlay
    bodyOverlay.addEventListener('click', function() {
        curriculumPanel.classList.remove('active');
        bodyOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar rolagem do body
    });
    
    // Fechar o painel ao pressionar a tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && curriculumPanel.classList.contains('active')) {
            curriculumPanel.classList.remove('active');
            bodyOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restaurar rolagem do body
        }
    });
});