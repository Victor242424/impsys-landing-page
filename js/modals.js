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