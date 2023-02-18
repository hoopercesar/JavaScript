const scanner = new Html5QrcodeScanner("reader", {
  // Scanner will be initialized in DOM inside element with id of 'reader'
  qrbox: {
    width: 250,
    height: 250,
  }, // Sets dimensions of scanning box (set relative to reader element width)
  fps: 20, // Frames per second to attempt a scan
});

scanner.render(success, error);
// Starts scanner

function success(result) {
  document.getElementById("result").innerHTML = `
  <h2>Success!</h2>
  <p><a href="${result}">${result}</a></p>
  `;
  // Prints result as a link inside result element

  scanner.clear();
  // Clears scanning instance

  document.getElementById("reader").remove();
  // Removes reader element from DOM since no longer needed
}

function error(err) {
  console.error(err);
  // Prints any errors to the console
}

// When scan is successful fucntion will produce data
// function onScanSuccess(qrCodeMessage) {
//   document.getElementById("result").innerHTML =
//     '<span class="result">' + qrCodeMessage + "</span>";
// }

// // When scan is unsuccessful fucntion will produce error message
// function onScanError(errorMessage) {
//   // Handle Scan Error
// }

// // Setting up Qr Scanner properties
// const html5QrCodeScanner = new Html5QrcodeScanner("reader", {
//   fps: 10,
//   qrbox: 250,
// });

// // in
// html5QrCodeScanner.render(onScanSuccess, onScanError);
