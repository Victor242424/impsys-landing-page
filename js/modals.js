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

    // Project modal form handler
    document.getElementById('projectForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const projectType = formData.get('projectType') || 'proyecto personalizado';
        
        alert(`¡Excelente! Hemos recibido tu solicitud para un ${projectType}. Te contactaremos en las próximas 24 horas para agendar tu consulta gratuita. En una implementación real, esto enviaría los datos a nuestro CRM.`);
        
        // Close modal and reset form
        document.getElementById('projectModal').classList.add('hidden');
        document.body.style.overflow = 'auto';
        this.reset();
    });

    // Project modal close handlers
    document.getElementById('closeProjectModal').addEventListener('click', function() {
        document.getElementById('projectModal').classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    document.getElementById('cancelProject').addEventListener('click', function() {
        document.getElementById('projectModal').classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    // Close project modal when clicking outside
    document.getElementById('projectModal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
})();