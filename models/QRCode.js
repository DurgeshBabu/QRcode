import mongoose from 'mongoose';

 const QRCodeSchema = new mongoose.Schema(
    {
        text : String,
    }
 );
 
 const QRCode = mongoose.model('QRCode', QRCodeSchema);
 export default QRCode;