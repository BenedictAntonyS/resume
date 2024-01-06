"use strict";

/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 
function submitForm() {
  // Get form data
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("date").value;
  var comment = document.getElementById("comment").value; // Prepare data for download

  var data = "First Name: ".concat(firstName, "\nLast Name: ").concat(lastName, "\nEmail: ").concat(email, "\nPhone Number: ").concat(phone, "\nDate: ").concat(date, "\nComment: ").concat(comment); // Create a Blob containing the data

  var blob = new Blob([data], {
    type: "text/plain"
  }); // Create a link to trigger the download

  var link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "formData.txt"; // Append the link to the document and trigger the download

  document.body.appendChild(link);
  link.click(); // Display status message

  var statusMessage = document.getElementById("status-message");
  statusMessage.textContent = "Form submitted! Data downloaded.";
  statusMessage.style.color = "#4CAF50"; // Green color for success
}