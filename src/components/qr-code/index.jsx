import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css"; // make sure this is imported

export const QRcode = () => {
  const [qrcode, setqrcode] = useState("");
  const [input, setinput] = useState("");

  function handleqrcode() {
    setqrcode(input);
    setinput("");
  }

  return (
    <div className="qr-container">
      <h1>QR Code Generator</h1>

      <div className="qr-input-section">
        <input
          onChange={(e) => setinput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button disabled={input.trim() === ""} onClick={handleqrcode}>
          Generate
        </button>
      </div>

      <div className="qr-display">
        <QRCode id="qr-code-value" value={qrcode} size={250} bgColor="#fff" />
      </div>
    </div>
  );
};
