// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
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

// Validação do formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Obter valores dos campos
            const nome = document.querySelector('input[placeholder="Nome completo"]').value.trim();
            const email = document.querySelector('input[type="email"]').value.trim();
            const telefone = document.querySelector('input[type="tel"]').value.trim();
            const mensagem = document.querySelector('textarea').value.trim();
            
            // Validar nome (pelo menos 3 caracteres)
            if (nome.length < 3) {
                alert('Por favor, insira um nome válido com pelo menos 3 caracteres.');
                return false;
            }
            
            // Validar email (formato básico)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um endereço de email válido.');
                return false;
            }
            
            // Validar telefone (apenas números, pelo menos 10 dígitos)
            const telefoneClean = telefone.replace(/\D/g, '');
            if (telefoneClean.length < 10) {
                alert('Por favor, insira um número de telefone válido com DDD.');
                return false;
            }
            
            // Validar mensagem (pelo menos 10 caracteres)
            if (mensagem.length < 10) {
                alert('Por favor, insira uma mensagem com pelo menos 10 caracteres.');
                return false;
            }
            
            // Se tudo estiver válido, exibir mensagem de sucesso
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
            
            // Aqui você pode adicionar código para enviar os dados para um servidor
            // usando fetch API ou outra técnica de sua preferência
        });
    }
    
    // Adicionar menu mobile responsivo
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const header = document.querySelector('header .container');
    const nav = document.querySelector('header nav');
    
    if (header && nav) {
        header.insertBefore(menuToggle, nav);
        
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
});

// Funcionalidade para o currículo interativo
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do currículo
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