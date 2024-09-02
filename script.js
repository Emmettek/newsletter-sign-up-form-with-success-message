const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error-message");
const emailSpan = document.querySelector(".email-span")

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

openModal.addEventListener("click", () => {
    const emailValue = emailInput.value;

    if (validateEmail(emailValue)) {
        errorMessage.classList.add("hidden");
        modal.style.display = "block";
        emailSpan.textContent = emailValue;
    } else {
        errorMessage.classList.remove("hidden");
        emailInput.classList.add("border-tomato", "bg-tomato", "bg-opacity-20", "text-tomato");
    }
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    emailInput.value = "";
    emailInput.classList.remove("border-tomato", "bg-tomato", "bg-opacity-20", "text-tomato");
});
