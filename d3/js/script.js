/* global JSZip */
//YOUR CODE HERE
// const jszipMin = require("./jszip.min");

// Get the file upload

compressBTN = document.getElementById("compressBtn");
var zip = new JSZip();

compressBTN.addEventListener("click", function (e) {
  fileInput = document.getElementById("docpicker");

  for (const file of fileInput.files) {
    zip.file(file.name, file.content);
  }

  // Zip the file

  zip.generateAsync({ type: "base64" }).then(function (base64) {
    location.href = "data:application/zip;base64," + base64;
  });

  // Save the file

  // Update to confirm success
  document.getElementById("status").textContent =
    "Folder Compressed Succesfully";
});
