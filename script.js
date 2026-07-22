function startVoice() {
    alert("🎤 Voice Assistant Activated!\n\nThis is a frontend prototype. AI integration will be added in the future.");
}
function sendMessage() {
    const input = document.querySelector("input");

    if (input.value.trim() === "") {
        alert("Please type a message.");
        return;
    }
    alert("Message Sent!\n\nYou typed:\n" + input.value);

    input.value = "";
}
function addReminder() {
    alert("💊 Medicine reminder added successfully!");
}

function sendSOS() {
    alert("🚨 Emergency SOS Alert Sent!\n\nCaregiver has been notified.");
}

function updateProfile() {
    alert("👤 Profile updated successfully!");
}

function getStarted() {
    window.location.href = "assistant.html";
}

const cards = document.querySelectorAll(".card");
cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

// Footer Year
const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = "© " + new Date().getFullYear() + " ElderCare AI ";
}