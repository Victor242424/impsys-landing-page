        // Interactividad avanzada del selector de idioma (accesible y animada)
        (() => {
            const button = document.getElementById('langButton');
            const arrow = document.getElementById('langArrow');
            const menu = document.getElementById('langMenu');
            const label = document.getElementById('langLabel');
            const dropdown = document.getElementById('langDropdown');

            const openMenu = () => {
                menu.classList.remove('invisible', 'opacity-0', 'scale-95', 'pointer-events-none');
                button.setAttribute('aria-expanded', 'true');
                arrow.style.transform = 'rotate(180deg)';
                // Enfocar el elemento activo para navegación con teclado
                const active = menu.querySelector(`button[data-label="${label.textContent}"]`);
                (active || menu.querySelector('button')).focus();
            };
            const closeMenu = () => {
                menu.classList.add('invisible', 'opacity-0', 'scale-95', 'pointer-events-none');
                button.setAttribute('aria-expanded', 'false');
                arrow.style.transform = '';
            };
            const toggleMenu = () => {
                if (menu.classList.contains('invisible')) openMenu();
                else closeMenu();
            };

            // Abrir/cerrar al hacer clic en el botón
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleMenu();
            });

            // Cerrar al hacer clic fuera
            document.addEventListener('click', (e) => {
                if (!dropdown.contains(e.target)) closeMenu();
            });

        })();