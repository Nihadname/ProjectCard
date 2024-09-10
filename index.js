document.getElementById('addVariation').addEventListener('click', function() {
    const container = document.getElementById('variationsContainer');
    const template = document.querySelector('.variation-template').cloneNode(true);
    template.classList.remove('d-none');
    container.appendChild(template);
});

document.getElementById('variationsContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-variation')) {
        event.target.parentElement.remove();
    }
});
