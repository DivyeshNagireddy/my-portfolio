document.addEventListener('DOMContentLoaded', function () {
    const projectButtons = document.querySelectorAll('.project-btn');

    projectButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.plus-icon');

            if (!content || !content.classList.contains('project-content')) {
                console.error('Project description element not found.');
                return;
            }

            const isOpen = content.classList.contains('active');

            if (isOpen) {
                content.classList.remove('active');
                content.style.maxHeight = '0px';

                if (icon) icon.textContent = '+';
            } else {
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';

                if (icon) icon.textContent = '−';
            }
        });
    });
});
