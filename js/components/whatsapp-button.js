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

   