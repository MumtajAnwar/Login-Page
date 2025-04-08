const inputs = document.querySelectorAll(".input");

function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});

// Handle form submission and show success message
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Simulate a successful login
    setTimeout(function () {
        showSuccessMessage();
    }, 500); // Wait for 0.5 seconds before showing the success message
});

// Show the success message with animation
function showSuccessMessage() {
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block"; // Make the success message visible
    setTimeout(() => {
        successMessage.style.opacity = 1; // Fade-in effect
        successMessage.style.transform = "translateY(0)"; // Slide-up effect
    }, 10); // Slight delay for the animation to start
}
