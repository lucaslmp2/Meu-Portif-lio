document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para os links da navbar
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Funcionalidade para as abas de habilidades
    const tabButtons = document.querySelectorAll('.tab-menu .tab');
    const featuresGrid = document.getElementById('features-grid');

    const allFeatures = {
        design: [
            { icon: '<i class="fab fa-figma"></i>', title: 'Figma', description: 'Prototipagem e design de interfaces de usuário.' },
            { icon: '<i class="fas fa-palette"></i>', title: 'UI/UX Design', description: 'Criação de experiências de usuário intuitivas e agradáveis.' },
            { icon: '<i class="fas fa-mobile-alt"></i>', title: 'Design Responsivo', description: 'Adaptação de layouts para diferentes dispositivos e tamanhos de tela.' },
            { icon: '<i class="fas fa-bezier-curve"></i>', title: 'Wireframing & Prototyping', description: 'Criação de esboços e modelos interativos para validação de ideias.' },
            { icon: '<i class="fas fa-universal-access"></i>', title: 'Acessibilidade Web', description: 'Garantia de que sites e aplicações são utilizáveis por todos.' }
        ],
        frontend: [
            //{ icon: '<i class="fab fa-react"></i>', title: 'React.js', description: 'Criação de interfaces de usuário reativas e componentizadas.' },
            { icon: '<i class="fab fa-js"></i>', title: 'JavaScript (ES6+)', description: 'Linguagem base para interatividade web moderna.' },
            { icon: '<i class="fab fa-html5"></i>', title: 'HTML5', description: 'Estruturação semântica e acessível de páginas web.' },
            { icon: '<i class="fab fa-css3-alt"></i>', title: 'CSS3 & Sass', description: 'Estilização avançada e pré-processamento para designs responsivos.' },
           // { icon: '<i class="fab fa-vuejs"></i>', title: 'Vue.js', description: 'Framework progressivo para construção de UIs flexíveis.' },
           // { icon: '<i class="fas fa-code"></i>', title: 'TypeScript', description: 'JavaScript com tipagem estática para maior robustez.' }
        ],
        backend: [
            //{ icon: '<i class="fab fa-node-js"></i>', title: 'Node.js', description: 'Ambiente de execução JavaScript para back-end.' },
            //{ icon: '<i class="fas fa-database"></i>', title: 'MongoDB', description: 'Banco de dados NoSQL para escalabilidade e flexibilidade.' },
            //{ icon: '<i class="fas fa-server"></i>', title: 'Express.js', description: 'Framework web para Node.js, simplificando o desenvolvimento de APIs.' },
           // { icon: '<i class="fas fa-cloud"></i>', title: 'RESTful APIs', description: 'Desenvolvimento e consumo de APIs REST.' },
            { icon: '<i class="fab fa-python"></i>', title: 'Python', description: 'Versatilidade para scripts, automação e desenvolvimento back-end.' },
            { icon: '<i class="fab fa-java"></i>', title: 'Java', description: 'Versatilidade para scripts, automação e desenvolvimento back-end.' },
            { icon: '<i class="fas fa-cube"></i>', title: 'SQL', description: 'Consultas e gerenciamento de bancos de dados relacionais.' }
        ]
        
    };

    function renderFeatures(category) {
        featuresGrid.innerHTML = ''; // Limpa o grid
        const featuresToRender = allFeatures[category];

        featuresToRender.forEach(feature => {
            const card = document.createElement('div');
            card.classList.add('feature-card');
            card.innerHTML = `
                <div class="icon">${feature.icon}</div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            `;
            featuresGrid.appendChild(card);
        });
    }

    // Carrega as features de 'frontend' por padrão
    renderFeatures('frontend');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'active' de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' ao botão clicado
            this.classList.add('active');

            const category = this.dataset.tab;
            renderFeatures(category);
        });
    });

    // Efeito de rolagem para o cabeçalho fixo (já tratado pelo CSS, mas bom para garantir)
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); // Você pode adicionar um estilo CSS para 'scrolled' se quiser
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Interação com os botões "Ver Projetos" e "Entrar em Contato"
    document.querySelector('.hero-actions .btn-primary').addEventListener('click', () => {
        document.querySelector('#projects').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.querySelector('.hero-actions .btn-secondary').addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.querySelector('.preview-window .btn.primary').addEventListener('click', () => {
        document.querySelector('#projects').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.querySelector('.cta-buttons .btn-primary').addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

});
document.addEventListener('DOMContentLoaded', () => {
        const carousel = document.querySelector('.projects-carousel');
        const prevButton = document.querySelector('[aria-label="Previous project"]');
        const nextButton = document.querySelector('[aria-label="Next project"]');


        if (carousel && prevButton && nextButton) {
            prevButton.addEventListener('click', () => {
                // Scroll left by the width of one project card + gap
                const cardWidth = carousel.querySelector('.project-card').offsetWidth;
                const gap = parseFloat(getComputedStyle(carousel).gap);
                carousel.scrollBy({
                    left: -(cardWidth + gap),
                    behavior: 'smooth'
                });
            });

            nextButton.addEventListener('click', () => {
                // Scroll right by the width of one project card + gap
                const cardWidth = carousel.querySelector('.project-card').offsetWidth;
                const gap = parseFloat(getComputedStyle(carousel).gap);
                carousel.scrollBy({
                    left: (cardWidth + gap),
                    behavior: 'smooth'
                });
            });
        }
    });
// script2.js
document.addEventListener('DOMContentLoaded', () => {
  // ===== 1) Carrossel dos projetos (#projects) =====
  const projectsContainer = document.querySelector('#projects .swiper-container');
  if (projectsContainer && window.Swiper) {
    const prevBtn = document.querySelector('#projects [aria-label="Previous project"]');
    const nextBtn = document.querySelector('#projects [aria-label="Next project"]');

    new Swiper('#projects .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: false,
      pagination: {
        el: '#projects .swiper-pagination',
        clickable: true
      },
      // Usa seus botões existentes (com aria-label)
      navigation: {
        prevEl: prevBtn || '#projects .swiper-button-prev',
        nextEl: nextBtn || '#projects .swiper-button-next'
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      },
      a11y: { enabled: true },
      keyboard: { enabled: true }
    });
  }

  // ===== 2) Carrossel de exemplo (.two) com coverflow =====
  const showcaseContainer = document.querySelector('.swiper-container.two');
  if (showcaseContainer && window.Swiper) {
    new Swiper('.swiper-container.two', {
      effect: 'coverflow',
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      // No Swiper moderno é "coverflowEffect"
      coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: false
      },
      pagination: {
        el: '.swiper-container.two .swiper-pagination',
        clickable: true
      },
      // Se quiser usar também as setas padrão do Swiper (opcional)
      navigation: {
        prevEl: '.swiper-container.two .swiper-button-prev',
        nextEl: '.swiper-container.two .swiper-button-next'
      },
      a11y: { enabled: true },
      keyboard: { enabled: true }
    });
  }

  // Dica: Remova o JS antigo que fazia carousel.scrollBy para não conflitar.
});

