function generateCertificate() {
    let name = document.getElementById("nameInput").value;
    let date = document.getElementById("dateInput").value;

    if (name && date) {
        // Update certificate text
        document.getElementById("participantName").textContent = name;
        document.getElementById("dateText").textContent = date;

        // Hide the form and show the certificate
        document.getElementById("formContainer").style.display = "none";
        document.getElementById("certificateContainer").style.display = "block";
    } else {
        alert("Please enter both Name and Date!");
    }
}

function downloadCertificate() {
    let certificate = document.getElementById("certificate");

    html2canvas(certificate).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "Certificate.png";
        link.click();
    });
}