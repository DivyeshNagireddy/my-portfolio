
document.addEventListener('DOMContentLoaded', () => {
    const projectButtons = document.querySelectorAll('.project-btn');

    projectButtons.forEach((button) => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('.plus-icon');

        if (!content || !icon) {
            return;
        }

        // Start with every project collapsed.
        content.classList.remove('active');
        content.style.maxHeight = '0px';
        button.setAttribute('aria-expanded', 'false');
        icon.textContent = '+';

        button.addEventListener('click', () => {
            const isOpen =
                button.getAttribute('aria-expanded') === 'true';

            if (isOpen) {
                button.setAttribute('aria-expanded', 'false');
                content.classList.remove('active');
                content.style.maxHeight = '0px';
                icon.textContent = '+';
            } else {
                button.setAttribute('aria-expanded', 'true');
                content.classList.add('active');
                icon.textContent = '−';
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });

        // Update expanded project height after a window resize.
        window.addEventListener('resize', () => {
            if (button.getAttribute('aria-expanded') === 'true') {
                content.style.maxHeight =
                    content.scrollHeight + 'px';
            }
        });
    });
});
