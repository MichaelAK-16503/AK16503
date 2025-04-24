// script.js

document.getElementById("bookingForm").addEventListener("submit", function (event) {
   event.preventDefault();

   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const destination = document.getElementById("destination").value;
   const date = document.getElementById("date").value;

   const confirmationMessage = `Thank you, ${name}! Your trip to ${destination.charAt(0).toUpperCase() + destination.slice(1)} on ${date} has been booked. A confirmation email has been sent to ${email}.`;

   document.getElementById("confirmationMessage").textContent = confirmationMessage;
   document.getElementById("bookingForm").reset();
});

function scrollToBooking() {
   const bookingSection = document.getElementById("booking");
   bookingSection.scrollIntoView({ behavior: "smooth" });
}
