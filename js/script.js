/* eslint-disable no-unused-vars */

// Execute when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to relevant DOM elements
  var radioButtons = document.querySelectorAll('input[name="contactReason"]');
  var hourlyRateContainer = document.getElementById("hourlyRateContainer");
  var hourlyRateInput = document.getElementById("hourlyRate");

  // Initial check on page load
  toggleHourlyRateInput();

  // Attach event listener for changes on all radio buttons
  radioButtons.forEach(function (radio) {
    radio.addEventListener("change", toggleHourlyRateInput);
  });
});

// Function to toggle visibility and required status of hourly rate input
function toggleHourlyRateInput() {
  // Get references to relevant DOM elements
  var hiringRadio = document.getElementById("hiring");
  var hourlyRateContainer = document.getElementById("hourlyRateContainer");
  var hourlyRateInput = document.getElementById("hourlyRate");

  // Check if "Hiring" radio button is selected
  if (hiringRadio.checked) {
    // Show the hourly rate input and make it required
    hourlyRateContainer.style.display = "block";
    hourlyRateInput.setAttribute("required", "required");
  } else {
    // Hide the hourly rate input, remove required attribute, and clear its value
    hourlyRateContainer.style.display = "none";
    hourlyRateInput.removeAttribute("required");
    hourlyRateInput.value = ""; // Clear the value when hidden
  }
}

// Function to validate the form on submission
function validateForm() {
  // Get values from various form fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var postalCode = document.getElementById("postalCode").value;
  var contactReason = document.querySelector('input[name="contactReason"]:checked');
  var hourlyRateInput = document.getElementById("hourlyRate");
  var message = document.getElementById("message").value;

  // Basic validation for required fields
  if (!name || !email || !address || !city || !postalCode || !contactReason || !message) {
    alert("Please fill out all required fields.");
    return false;
  }

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate Canadian postal code format
  var postalCodeRegex =
    /^[A-CEGHJ-NPR-TVXYa-ceghj-npr-tvxy][0-9][A-CEGHJ-NPR-TV-Za-ceghj-npr-tvz]\s?[0-9][A-CEGHJ-NPR-TV-Za-ceghj-npr-tvz][0-9]$/;
  if (!postalCodeRegex.test(postalCode)) {
    alert("Please enter a valid Canadian postal code.");
    return false;
  }

  // Additional validation for hourly rate (if applicable)
  if (contactReason && contactReason.value === "Hiring" && hourlyRateInput.value <= 0) {
    alert("Please enter a valid hourly rate.");
    return false;
  }

  // Limit the message length
  var maxMessageLength = 500; // Adjust as needed
  if (message.length > maxMessageLength) {
    alert("Please limit your message to " + maxMessageLength + " characters.");
    return false;
  }

  // Form is valid, allow submission
  return true;
}
