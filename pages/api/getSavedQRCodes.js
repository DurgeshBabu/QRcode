import dbConnect from "../../Utils/dbConnect";
import QRCode from "../../models/QRCode";

export default async function handler (req,res){
    await dbConnect();
    if (req.method==='GET'){
        try {
            const savedQRCodes = await QRCode.find({});
        res.status(200).json(savedQRCodes);
        } catch (error) {
            res.status(500).json({message:'Error fetching saved QR code from the database'})
        }
    }else{
        res.status(405).json({message: 'method is not allowed'})
    }
    
}