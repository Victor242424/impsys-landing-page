// Interactividad avanzada del selector de idioma (accesible y animada)
(() => {
    const menu = document.getElementById('langMenu');
    let mobileMenu = document.getElementById('mobileLangMenu');

    /*     Clona menu de lengua cuando es mobil     */
    // Breakpoint para sm (640px - 767px)
    const smMediaQuery = window.matchMedia('(max-width: 640px)');

    function changeLanguagueMenuIfSm() {
        console.log('Ejecutando en tamaño SM');
        const cloneMenu = menu.cloneNode(true);
        console.log(cloneMenu);
        const parent = mobileMenu.parentNode;
        console.log(parent);
        parent.replaceChild(cloneMenu, mobileMenu);
        cloneMenu.id = 'mobileLangMenu';
        mobileMenu = document.getElementById('mobileLangMenu')
    }

    // Configurar el listener
    smMediaQuery.addEventListener('change', (e) => {
        console.log('Cambio de media query:', e.matches);
        if (e.matches) changeLanguagueMenuIfSm();
    });
    console.log('Cambio de media  raw:', smMediaQuery);
    // Ejecutar inmediatamente si coincide
    if (smMediaQuery.matches) changeLanguagueMenuIfSm();



    /*     Eventos de menu de lenguaje     */

    const button = document.getElementById('langButton');
    const mobileButton = document.getElementById('mobileLangButton');
    
    const arrow = document.getElementById('langArrow');
    const mobileArrow = document.getElementById('mobileLangArrow');
    
  /*   const label = document.getElementById('langLabel'); */
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
        toggleMenu(mobileMenu, mobileButton, mobileArrow);
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) closeMenu(menu, button, arrow);
        if (!mobileDropdown.contains(e.target)) closeMenu(mobileMenu, mobileButton, mobileArrow);
    });

})();