
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.project-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the content div immediately after the button
            const content = button.nextElementSibling;
            const icon = button.querySelector('.plus-icon');

            // Toggle the 'active' class to trigger the CSS slide
            content.classList.toggle('active');

            // Change the icon from + to - when open
            if (content.classList.contains('active')) {
                icon.textContent = '−';
            } else {
                icon.textContent = '+';
            }
        });
    });
});
