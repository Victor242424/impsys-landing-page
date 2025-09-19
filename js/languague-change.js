        // Interactividad avanzada del selector de idioma (accesible y animada)
        (() => {
            const button = document.getElementById('langButton');
            const arrow = document.getElementById('langArrow');
            const menu = document.getElementById('langMenu');
            const label = document.getElementById('langLabel');
            const dropdown = document.getElementById('langDropdown');

            
            let prueba = getData("i18n-es.json");
            debugger
            // Diccionario de traducciones solo para la barra
            const i18n = {
               // ES: { services: 'Servicios', portfolio: 'Portfolio', about: 'Nosotros', resources: 'Recursos', contact: 'Contacto', cta: 'Consulta Gratuita' },
                ES: { services: 'Servicios', portfolio: 'Portfolio', about: 'Nosotros', resources: 'Recursos', contact: 'Contacto', cta: 'Consulta Gratuita' }, 
                EN: { services: 'Services',  portfolio: 'Portfolio', about: 'About',    resources: 'Resources', contact: 'Contact',  cta: 'Free Consultation' },
                PT: { services: 'Serviços',  portfolio: 'Portfólio', about: 'Sobre nós', resources: 'Recursos', contact: 'Contato',   cta: 'Consulta Grátis' }
            };

            const setChecks = (code) => {
                menu.querySelectorAll('.check').forEach(c => c.classList.add('hidden'));
                const active = menu.querySelector(`button[data-label="${code}"] .check`);
                if (active) active.classList.remove('hidden');
            };

            const applyLang = (code) => {
                const texts = i18n[code] || i18n.EN;
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (texts[key]) el.textContent = texts[key];
                });
                document.documentElement.lang = code.toLowerCase();
                label.textContent = code;
                setChecks(code);
            };

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

            // Navegación con teclado dentro del menú
            menu.addEventListener('keydown', (e) => {
                const items = Array.from(menu.querySelectorAll('button[role="menuitem"]'));
                const index = items.indexOf(document.activeElement);
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const next = items[(index + 1) % items.length];
                    next.focus();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prev = items[(index - 1 + items.length) % items.length];
                    prev.focus();
                } else if (e.key === 'Home') {
                    e.preventDefault();
                    items[0].focus();
                } else if (e.key === 'End') {
                    e.preventDefault();
                    items[items.length - 1].focus();
                } else if (e.key === 'Escape') {
                    closeMenu();
                    button.focus();
                }
            });

            // Seleccionar idioma y cerrar + guardar preferencia
            menu.querySelectorAll('button[data-lang]').forEach(item => {
                item.addEventListener('click', (e) => {
                    const code = e.currentTarget.getAttribute('data-label') || 'EN';
                    applyLang(code);
                    try { localStorage.setItem('lang', code); } catch (_) {}
                    closeMenu();
                    button.focus();
                });
            });

            // Cerrar al hacer clic fuera
            document.addEventListener('click', (e) => {
                if (!dropdown.contains(e.target)) closeMenu();
            });

            // Cerrar con Escape global
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeMenu();
                // Abrir con Alt+L
                if ((e.altKey || e.metaKey) && e.key.toLowerCase() === 'l') {
                    e.preventDefault();
                    openMenu();
                }
            });

            // Idioma por defecto: EN o el almacenado
            const saved = (() => { try { return localStorage.getItem('lang'); } catch (_) { return null; } })();
            applyLang(saved || 'EN');
        })();