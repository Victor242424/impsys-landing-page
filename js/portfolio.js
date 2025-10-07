(() => {
     // Portfolio functionality
   

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