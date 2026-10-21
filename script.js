
document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll(".project-item");

    projectItems.forEach(function (item) {
        const button = item.querySelector(".project-btn");
        const content = item.querySelector(".project-content");
        const icon = item.querySelector(".plus-icon");

        if (!button || !content) return;

        // Set the initial collapsed state.
        button.setAttribute("aria-expanded", "false");
        content.style.maxHeight = "0px";

        button.addEventListener("click", function () {
            const isOpen = button.getAttribute("aria-expanded") === "true";

            if (isOpen) {
                // Collapse this project.
                button.setAttribute("aria-expanded", "false");
                button.classList.remove("active");
                content.style.maxHeight = "0px";

                if (icon) {
                    icon.textContent = "+";
                }
            } else {
                // Expand this project.
                button.setAttribute("aria-expanded", "true");
                button.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";

                if (icon) {
                    icon.textContent = "−";
                }
            }
        });
    });

    // Keep expanded project content correctly sized after resizing.
    window.addEventListener("resize", function () {
        projectItems.forEach(function (item) {
            const button = item.querySelector(".project-btn");
            const content = item.querySelector(".project-content");

            if (
                button &&
                content &&
                button.getAttribute("aria-expanded") === "true"
            ) {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
