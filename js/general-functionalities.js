(() => {
    // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add fade-in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
        
        // Interactive counter animation
        const counters = document.querySelectorAll('.stat-counter');
        counters.forEach(counter => {
            counter.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1) rotate(2deg)';
            });
            counter.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        });

        // Parallax effect for floating elements
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelectorAll('.floating-element');
            const speed = 0.5;

            parallax.forEach(element => {
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });

        // Interactive card hover effects
        document.querySelectorAll('.interactive-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(5px)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });

        // Close modal functionality
        document.getElementById('closeModal').addEventListener('click', function() {
            document.getElementById('portfolioModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        // Close modal when clicking outside
        document.getElementById('portfolioModal').addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });

        // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();
})();


/* Mobile Menu Animation */

(() => {
    document.getElementById('menuMobileButton').addEventListener('click', function() {
        const menu = document.getElementById('navBarMobileMenu'); 
        const children = menu.children;
        menu.classList.toggle('max-h-0');
        menu.classList.toggle('opacity-0');
        menu.classList.toggle('mb-4');
        const langDropdown = document.getElementById('langDropdown');
        langDropdown.classList.toggle('my-4');
        for (let i = 0; i < children.length; i++) {
            children[i].classList.toggle('translate-y-[-1rem]');
        }
    });
})();

/* Close mobile menu on child click */

(() => {
    const parentDiv = document.getElementById('navBarMobileMenu');
    parentDiv.addEventListener('click', function(e) {
        if (e.target.parentElement.parentElement === parentDiv) {
            console.log('Hijo clickeado:', e.target);
            console.log('Contenido:', e.target.textContent);
            document.getElementById('menuMobileButton').click();
        }
    });
})();


/* WhatsApp Button Animation */

(() => {
// WhatsApp Button Functionality
    const whatsappBtn = document.getElementById('whatsappBtn');
    const whatsappTooltip = document.getElementById('whatsappTooltip');
    
    whatsappBtn.addEventListener('mouseenter', function() {
        whatsappTooltip.style.opacity = '1';
        whatsappTooltip.style.transform = 'translateY(0)';
    });
    
    whatsappBtn.addEventListener('mouseleave', function() {
        whatsappTooltip.style.opacity = '0';
        whatsappTooltip.style.transform = 'translateY(8px)';
    });
})();

/*  Interactividad avanzada del selector de idioma (accesible y animada) */
(() => {
    const menu = document.getElementById('langMenu');
    let mobileMenu = document.getElementById('mobileLangMenu');

    /*     Clona menu de lengua cuando es mobil     */
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    function changeLanguagueMenuIfSm() {
        const cloneMenu = menu.cloneNode(true);
        const parent = mobileMenu.parentNode;
        parent.replaceChild(cloneMenu, mobileMenu);
        cloneMenu.id = 'mobileLangMenu';
        mobileMenu = document.getElementById('mobileLangMenu')
        console.log('Menu de lenguaje clonado para móvil');
    }

    // Configurar el listener
    mediaQuery.addEventListener('change', (e) => {
        if (e.matches) changeLanguagueMenuIfSm();
    });
    // Ejecutar inmediatamente si coincide
    if (mediaQuery.matches) changeLanguagueMenuIfSm();



    /*     Eventos de menu de lenguaje     */

    const button = document.getElementById('langButton');
    const mobileButton = document.getElementById('mobileLangButton');
    
    const arrow = document.getElementById('langArrow');
    const mobileArrow = document.getElementById('mobileLangArrow');
    
    const dropdown = document.getElementById('langDropdown');
    const mobileDropdown = document.getElementById('mobileLangDropdown');

    const openMenu = (menu, button, arrow) => {
        menu.classList.remove('invisible', 'opacity-0', 'scale-95', 'pointer-events-none');
        button.setAttribute('aria-expanded', 'true');
        arrow.style.transform = 'rotate(180deg)';
    };

    const closeMenu = (menu, button, arrow) => {
        menu.classList.add('invisible', 'opacity-0', 'scale-95', 'pointer-events-none');
        button.setAttribute('aria-expanded', 'false');
        arrow.style.transform = '';
    };
    
    const toggleMenu = (menu, button, arrow) => {
        if (menu.classList.contains('invisible')) openMenu(menu, button, arrow);
        else closeMenu(menu, button, arrow);
    };

    // Abrir/cerrar al hacer clic en el botón
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu(menu, button, arrow);
    });

    // Abrir/cerrar al hacer clic en el botón
    mobileButton.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Clic en botón móvil');
        toggleMenu(mobileMenu, mobileButton, mobileArrow);
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) closeMenu(menu, button, arrow);
        if (!mobileDropdown.contains(e.target)) closeMenu(mobileMenu, mobileButton, mobileArrow);
    });

})();
   
/* Modal Functionality and Form Submission */

(() => {
     function scrollToPortfolio() {
        document.getElementById('portfolio').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Button click handlers for other buttons
    document.querySelectorAll('button').forEach(button => {
        if (!button.id && !button.closest('form') && !button.closest('article')) {
            button.addEventListener('click', function() {
                if (this.textContent.includes('Consulta') || this.textContent.includes('Comenzar')) {
                    // Open project modal
                    document.getElementById('projectModal').classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                } else if (this.textContent.includes('Portfolio')) {
                    scrollToPortfolio();
                } else if (this.textContent.includes('Recursos')) {
                    alert('En una implementación real, esto mostraría una página completa con todos los recursos disponibles.');
                }
            });
        }
    });

    // Project request modal functionality - using event delegation for dynamically added buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('project-request-btn')) {
            document.getElementById('portfolioModal').classList.add('hidden');
            document.getElementById('projectModal').classList.remove('hidden');
        }
    });

    // Project modal close handlers
    document.getElementById('closeProjectModal').addEventListener('click', function() {
        closeModal('projectModal');
    });

    document.getElementById('cancelProject').addEventListener('click', function() {
        closeModal('projectModal');
    });

    // Close project modal when clicking outside
    document.getElementById('projectModal').addEventListener('click', function(e) {
        if (e.target.id === this.id || this.firstElementChild === e.target) {
            closeModal(this.id);
        }
    });

       // Project modal form handler
    document.getElementById('projectForm').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('formSending').classList.remove('hidden')
        sendMail(this);
    });

    function sendMail(formObject) {
        emailjs.init("kkD3aEMiOBAl7qspV"); 
        emailjs.sendForm('service_1txv419', 'template_b1s5hyy', formObject)
        .then(() => {
            document.getElementById('formSending').classList.add('hidden')
            document.getElementById('formSuccessMessage').classList.remove('hidden');
            setTimeout(() =>  document.getElementById('formSuccessMessage').classList.add('hidden')
            , 5000);
            document.body.style.overflow = 'auto';
            //this.reset();
        })
        .catch((err) => {
            document.getElementById('formSending').classList.add('hidden')
            document.getElementById('formErrorMessage').classList.remove('hidden');
        });
    }

    function closeModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
    
})();

/* Portfolio Section Functionality */

(() => {
    // Portfolio filter functionality
    document.querySelectorAll('.portfolio-filter').forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active class from all filters
            document.querySelectorAll('.portfolio-filter').forEach(f => {
                f.classList.remove('active', 'bg-impsys-blue', 'text-white');
                f.classList.add('bg-gray-200', 'text-gray-700');
            });
            
            // Add active class to clicked filter
            this.classList.add('active', 'bg-impsys-blue', 'text-white');
            this.classList.remove('bg-gray-200', 'text-gray-700');
            
            // Filter portfolio items
            const filterValue = this.dataset.filter;
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Portfolio detail modal functionality
    const portfolioData = {
        tiendamax: {
            title: 'TiendaMax - E-commerce B2B',
            description: 'Plataforma de venta online para distribuidora mayorista',
            challenge: 'La empresa necesitaba digitalizar su proceso de ventas B2B y gestionar un catálogo de más de 10,000 productos con precios diferenciados por cliente.',
            solution: 'Desarrollamos una plataforma e-commerce completa con sistema de autenticación por roles, catálogo dinámico, gestión de inventarios en tiempo real y integración con su ERP existente.',
            results: [
                'Aumento del 150% en ventas online',
                'Reducción del 60% en tiempo de procesamiento de pedidos',
                'Automatización completa del proceso de facturación',
                'Integración exitosa con 5 proveedores principales'
            ],
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
            timeline: '4 meses',
            team: '5 desarrolladores'
        },
        logitrack: {
            title: 'LogiTrack - App de Logística',
            description: 'Aplicación móvil para seguimiento de entregas en tiempo real',
            challenge: 'Empresa de logística necesitaba mejorar la visibilidad de sus entregas y reducir las consultas de clientes sobre el estado de sus pedidos.',
            solution: 'Desarrollamos una app móvil nativa con geolocalización en tiempo real, notificaciones push automáticas y portal web para clientes.',
            results: [
                'Calificación de 4.8 estrellas en app stores',
                'Reducción del 70% en llamadas de consulta',
                'Mejora del 45% en satisfacción del cliente',
                'Optimización de rutas que redujo costos en 25%'
            ],
            technologies: ['React Native', 'Firebase', 'Google Maps API', 'Node.js'],
            timeline: '3 meses',
            team: '4 desarrolladores'
        },
        manufacturaplus: {
            title: 'ManufacturaPlus - ERP Industrial',
            description: 'Sistema ERP completo para empresa manufacturera',
            challenge: 'Empresa manufacturera con procesos manuales, falta de trazabilidad en producción y dificultades para generar reportes precisos.',
            solution: 'Implementamos un ERP completo con módulos de producción, inventarios, contabilidad y recursos humanos, todo integrado en una sola plataforma.',
            results: [
                'Reducción del 40% en tiempo de procesos',
                'Mejora del 90% en precisión de inventarios',
                'Automatización completa de reportes financieros',
                'ROI del 250% en el primer año'
            ],
            technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker', 'Linux'],
            timeline: '6 meses',
            team: '7 desarrolladores'
        },
        educonnect: {
            title: 'EduConnect - Plataforma Educativa',
            description: 'Plataforma de gestión educativa con aulas virtuales',
            challenge: 'Instituto educativo necesitaba digitalizar sus clases y mejorar el seguimiento académico de más de 2,500 estudiantes.',
            solution: 'Creamos una plataforma completa con aulas virtuales, sistema de calificaciones, comunicación padres-profesores y reportes académicos automatizados.',
            results: [
                '2,500+ usuarios activos diariamente',
                'Mejora del 35% en rendimiento académico',
                'Reducción del 80% en tiempo administrativo',
                'Satisfacción del 95% entre profesores y estudiantes'
            ],
            technologies: ['Angular', '.NET Core', 'SQL Server', 'SignalR', 'Azure'],
            timeline: '5 meses',
            team: '6 desarrolladores'
        },
        financeapp: {
            title: 'FinanceApp - Gestión Financiera',
            description: 'App móvil para gestión financiera personal y empresarial',
            challenge: 'Startup fintech necesitaba una aplicación móvil segura para gestión financiera con análisis avanzados y sincronización bancaria.',
            solution: 'Desarrollamos una app móvil con encriptación de extremo a extremo, integración con APIs bancarias y algoritmos de análisis financiero con IA.',
            results: [
                '10,000+ descargas en los primeros 3 meses',
                'Calificación promedio de 4.7 estrellas',
                'Integración exitosa con 15 bancos principales',
                'Crecimiento mensual del 40% en usuarios activos'
            ],
            technologies: ['Flutter', 'Django', 'PostgreSQL', 'Redis', 'TensorFlow'],
            timeline: '4 meses',
            team: '5 desarrolladores'
        },
        medisys: {
            title: 'MediSys - Gestión Hospitalaria',
            description: 'Sistema integral para gestión hospitalaria',
            challenge: 'Red de hospitales necesitaba unificar la gestión de historiales médicos, citas y facturación en múltiples centros.',
            solution: 'Implementamos un sistema hospitalario completo con historiales médicos digitales, gestión de citas, facturación automática y reportes médicos.',
            results: [
                'Implementado en 3 hospitales principales',
                'Reducción del 50% en tiempo de consulta',
                'Mejora del 80% en precisión de historiales',
                'Ahorro anual de €200,000 en costos administrativos'
            ],
            technologies: ['React', 'Spring Boot', 'MongoDB', 'Elasticsearch', 'Docker'],
            timeline: '8 meses',
            team: '8 desarrolladores'
        }
    };

    // Portfolio detail buttons
    document.querySelectorAll('.portfolio-detail-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.dataset.project;
            const project = portfolioData[projectId];
            
            if (project) {
                showPortfolioModal(project);
            }
        });
    });

    function showPortfolioModal(project) {
        const modal = document.getElementById('portfolioModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');
        
        modalTitle.textContent = project.title;
        
        modalContent.innerHTML = `
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Descripción del Proyecto</h3>
                    <p class="text-gray-600 mb-6">${project.description}</p>
                    
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">El Desafío</h3>
                    <p class="text-gray-600 mb-6">${project.challenge}</p>
                    
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Nuestra Solución</h3>
                    <p class="text-gray-600">${project.solution}</p>
                </div>
                
                <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Resultados Obtenidos</h3>
                    <ul class="space-y-2 mb-6">
                        ${project.results.map(result => `
                            <li class="flex items-center space-x-2">
                                <span class="w-2 h-2 bg-impsys-blue rounded-full"></span>
                                <span class="text-gray-600">${result}</span>
                            </li>
                        `).join('')}
                    </ul>
                    
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Tecnologías Utilizadas</h3>
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${project.technologies.map(tech => `
                            <span class="bg-impsys-blue/10 text-impsys-blue px-3 py-1 rounded-full text-sm">${tech}</span>
                        `).join('')}
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h4 class="font-semibold text-gray-900 mb-1">Duración</h4>
                            <p class="text-gray-600">${project.timeline}</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h4 class="font-semibold text-gray-900 mb-1">Equipo</h4>
                            <p class="text-gray-600">${project.team}</p>
                        </div>
                    </div>
                    
                    <div class="mt-6">
                        <button class="w-full bg-impsys-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-impsys-dark transition-colors project-request-btn">
                            Solicitar Proyecto Similar
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
})();

