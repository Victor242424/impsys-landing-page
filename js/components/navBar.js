(() => {
    document.getElementById('menuMobileButton').addEventListener('click', function() {
        const menu = document.getElementById('navBarMenu'); 
        menu.classList.toggle('hidden');
    });
})();

   