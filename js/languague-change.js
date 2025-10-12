// Interactividad avanzada del selector de idioma (accesible y animada)
(() => {
    const button = document.getElementById('langButton');
    const mobileButton = document.getElementById('mobileLangButton');
    
    const arrow = document.getElementById('langArrow');
    const mobileArrow = document.getElementById('mobileLangArrow');
    
    const menu = document.getElementById('langMenu');
    const mobileMenu = document.getElementById('mobileLangMenu');
    
  /*   const label = document.getElementById('langLabel'); */
    const dropdown = document.getElementById('langDropdown');
    const mobileDropdown = document.getElementById('mobileLangDropdown');

    const openMenu = (menu, button, arrow) => {
        menu.classList.remove('invisible', 'opacity-0', 'scale-95', 'pointer-events-none');
        button.setAttribute('aria-expanded', 'true');
        arrow.style.transform = 'rotate(180deg)';
        // Enfocar el elemento activo para navegación con teclado
/*         const active = menu.querySelector(`button[data-label="${label.textContent}"]`);
        (active || menu.querySelector('button')).focus(); */
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
        toggleMenu(mobileMenu, mobileButton, mobileArrow);
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) closeMenu(menu, button, arrow);
        if (!mobileDropdown.contains(e.target)) closeMenu(mobileMenu, mobileButton, mobileArrow);
    });




    // Breakpoint para sm (640px - 767px)
    const smMediaQuery = window.matchMedia('(min-width: 640px) and (max-width: 767px)');

    function changeLanguagueMenuIfSm() {
        console.log('Ejecutando en tamaño SM');
/*         const cloneDropdown = dropdown.cloneNode(true);
        const parent = dropdown.parentNode;
        parent.replaceChild(cloneDropdown, dropdown);
        cloneDropdown.id = 'mobilLangDropdown';
        const cloneMenu = cloneDropdown.querySelector('#langMenu').cloneNode(true);
        cloneMenu.id = 'mobileLangMenu';
        const oldMenu = cloneDropdown.querySelector('#langMenu');
        oldMenu.parentNode.replaceChild(cloneMenu, oldMenu); */
        
        // Tu código aquí
    }

    // Configurar el listener
    smMediaQuery.addEventListener('change', (e) => {
        if (e.matches) changeLanguagueMenuIfSm();
    });

    // Ejecutar inmediatamente si coincide
    if (smMediaQuery.matches) changeLanguagueMenuIfSm();
})();