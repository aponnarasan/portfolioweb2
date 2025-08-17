document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
            alert("✅ Your message has been sent successfully!");
            form.reset();
        } else {
            alert("❌ Oops! Something went wrong. Please try again.");
        }
    });
});