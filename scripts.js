<script>
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 200); // correspond à la durée de l'animation
        });
    });
</script>
