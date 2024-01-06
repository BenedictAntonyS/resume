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
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const comment = document.getElementById("comment").value;

  // Prepare data for download
  const data = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone Number: ${phone}\nDate: ${date}\nComment: ${comment}`;

  // Create a Blob containing the data
  const blob = new Blob([data], { type: "text/plain" });

  // Create a link to trigger the download
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "formData.txt";

  // Append the link to the document and trigger the download
  document.body.appendChild(link);
  link.click();

  // Display status message
  const statusMessage = document.getElementById("status-message");
  statusMessage.textContent = "Form submitted! Data downloaded.";
  statusMessage.style.color = "#4CAF50"; // Green color for success
}
  
