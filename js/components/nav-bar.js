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
     /*    menu.classList.toggle('hidden');  */
    });
})();

   