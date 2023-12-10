// Move focus to the Arrival date text box
document.getElementById("arrival_date").focus();

// Add an event listener for the submit event of the form
document
  .getElementById("reservation_form")
  .addEventListener("submit", function (event) {
    // Get the form controls
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var arrivalDate = document.getElementById("arrival_date").value.trim();
    var nights = document.getElementById("nights").value.trim();

    // Validate the form controls
    if (
      !name ||
      !email ||
      !arrivalDate ||
      !nights ||
      isNaN(nights) ||
      !email.match(emailPattern)
    ) {
      // Display an error message
      alert("Please enter valid values for all fields.");

      // Cancel the submission of the form
      event.preventDefault();
    } else {
      // Put the trimmed entries back into the controls
      document.getElementById("name").value = name;
      document.getElementById("email").value = email;
      document.getElementById("arrival_date").value = arrivalDate;
      document.getElementById("nights").value = nights;
    }
  });
