
// ==========================================
// ORIONA NUMEROLOGY - WEBSITE JAVASCRIPT
// ==========================================

const WHATSAPP_NUMBER = "919141237523";

// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        document.body.classList.toggle("menu-open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            document.body.classList.remove("menu-open");
        });
    });
}

// ==========================================
// WHATSAPP MESSAGE FUNCTION
// ==========================================

function redirectToWhatsApp(service) {

    let message = "";

    if (service === "Name Correction Consultation") {

        message = `Hello Oriona Numerology!

I am interested in booking a Name Correction Consultation.

May I know more details about the consultation, available slots, and booking process?

I would also like to understand how the name correction process works.

Thank you!`;

    } else if (service === "Mobile Number Energy Reading") {

        message = `Hello Oriona Numerology!

I am interested in booking a Mobile Number Energy Reading.

May I know more details about the consultation, available slots, and booking process?

I would also like to understand how the mobile number energy analysis works.

Thank you!`;

    } else {

        message = `Hello Oriona Numerology!

I would like to know more about your numerology consultations.

Could you please share the available services, pricing, and booking details?

Thank you!`;
    }

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
}

// ==========================================
// BOOK NOW BUTTONS
// ==========================================

// Add data-service to each booking button in HTML.
// This handles all buttons with the class "book-now".

document.addEventListener("click", function (event) {

    const bookingButton = event.target.closest(".book-now");

    if (!bookingButton) return;

    event.preventDefault();

    const service = bookingButton.dataset.service || "";

    redirectToWhatsApp(service);
});

// ==========================================
// GENERAL WHATSAPP LINKS
// ==========================================

document.querySelectorAll(".whatsapp-contact").forEach(button => {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        redirectToWhatsApp("General Enquiry");
    });

});

// ==========================================
// CONTACT / BOOKING FORM
// ==========================================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const formData = new FormData(bookingForm);

        const name = formData.get("name") || "";
        const phone = formData.get("phone") || "";
        const email = formData.get("email") || "";
        const service = formData.get("service") || "General Enquiry";
        const PRICES = {
            "Name Correction Consultation": "₹7,499",
            "Mobile Number Energy Reading": "₹5,100",
            "Complete Numerology Consultation": "₹10,000"
        };
        const price = PRICES[service] ? ` (${PRICES[service]})` : "";
        const userMessage = formData.get("message") || "";

        const message = `Hello Oriona Numerology!

I would like to book a consultation.

Name: ${name}
Phone: ${phone}
Email: ${email}
Consultation: ${service}${price}

My Message:
${userMessage}

Please share the consultation details and booking process.

Thank you!`;

        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");

        bookingForm.reset();
    });
}

// ==========================================
// NAVBAR SHADOW ON SCROLL
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (navbar) {

        navbar.style.boxShadow =
            window.scrollY > 30
                ? "0 8px 30px rgba(48, 34, 55, 0.05)"
                : "none";
    }

});

