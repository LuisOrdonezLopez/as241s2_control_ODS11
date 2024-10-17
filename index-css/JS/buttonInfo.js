document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        const extraInfo = button.nextElementSibling;
        extraInfo.style.display = 'block'; // Muestra la información adicional
    });

    button.addEventListener('mouseleave', () => {
        const extraInfo = button.nextElementSibling;
        extraInfo.style.display = 'none'; // Oculta la información adicional
    });
});