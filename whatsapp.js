function contactWhatsApp(product) {
    let phone = "237652681834";
    let message = "Hello Advanced Auto Spare Parts, I am interested in: " + product;
    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}

function sendContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
        let phone = "237652681834";
        let whatsappMessage = `Hello Advanced Auto Spare Parts,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
        let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(whatsappMessage);
        window.open(url, "_blank");
        
        // Reset form
        document.getElementById('contactForm').reset();
        alert('Thank you for your message! Redirecting to WhatsApp...');
    } else {
        alert('Please fill in all fields');
    }
}