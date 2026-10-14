function validateForm(form) {
    const fields = form.querySelectorAll("[required]");

    fields.forEach(function (field) {
        if (field.checkValidity()) {
            field.classList.remove("is-invalid");
            field.classList.add("is-valid");
        } else {
            field.classList.remove("is-valid");
            field.classList.add("is-invalid");
        }
    });
}

function clearValidation(form) {
    const fields = form.querySelectorAll("[required]");

    fields.forEach(function (field) {
        field.classList.remove("is-valid", "is-invalid");
    });
}

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm(contactForm);
});

const registerForm = document.getElementById("registerForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    } else {
        confirmPassword.setCustomValidity("");
    }

    validateForm(registerForm);
});

registerForm.addEventListener("reset", function () {
    clearValidation(registerForm);
});