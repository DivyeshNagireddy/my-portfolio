document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.project-btn');

    buttons.forEach(button => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('.plus-icon');

        if (!content || !content.classList.contains('project-content')) {
            return;
        }

        button.addEventListener('click', () => {
            const isOpen = content.classList.contains('active');

            if (isOpen) {
                content.style.maxHeight = '0px';
                content.classList.remove('active');

                if (icon) {
                    icon.textContent = '+';
                }
            } else {
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';

                if (icon) {
                    icon.textContent = '−';
                }
            }
        });
    });
});
