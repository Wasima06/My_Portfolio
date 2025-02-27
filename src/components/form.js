function sendMessage(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here you can handle the sending logic (e.g., send to a server)
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    // Clear the form fields
    document.getElementById("contact-form").reset();
}