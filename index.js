const express = require('express');
const QRCode = require('qrcode');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/generatorQR',(req, res) =>{
  const  data = req.query.data;

  if(!data) {
    return res.status(400).send("please provide valid data");
  }
  QRCode.toFileStream(res, data)
});
app.listen(port, () => {
  console.log('Server running successfully')
});
// for Accessing  use "http://localhost:3000/generateQR?data=www.example.com"