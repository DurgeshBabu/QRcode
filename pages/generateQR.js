// pages/generateQR.js
import { useState } from 'react';
import QRCode from 'qrcode.react';

export default function GenerateQR() {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for QR code"
      />
      {text && <QRCode value={text} />}
    </div>
  );
}
