import React from "react";
// import QRCode from "qrcode.react"; //npm install qrcode.react

function Tickets() {
  // const qrValue = "https://reactjs.org"; // Predefined value for the QR code

  return (
    <div className="Tickets">
      <h1>Pre-loaded QR Code</h1> {/* Heading for the QR code generator */}

      {/* QRCode component that generates the QR code */}
      {/* 
      <div style={{ marginTop: '20px' }}>
        <QRCode
          value={qrValue}           // The value to be encoded in the QR code
          size={256}                // Size of the QR code (in pixels)
          bgColor="#ffffff"         // Background color (white)
          fgColor="#000000"         // Foreground color (black)
          level="Q"                 // Error correction level
          includeMargin={true}      // Adds margin around the QR code
        />
      </div>
      */}

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Back to home page
      </a>
    </div>
  );
}

export default Tickets;