document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if the fields are not empty
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return; // Stop execution if validation fails
    }

    // Send data using EmailJS
    emailjs
      .send("service_mzozh1p", "template_noz5ehe", {
        name: name,
        email: email,
        message: message,
      })
      .then(
        function (response) {
          alert("Thank you for your message, " + name + "!");
          document.getElementById("contact-form").reset(); // Clear the form after submission
        },
        function (error) {
          alert("Error sending message: " + JSON.stringify(error));
        }
      );
  });
