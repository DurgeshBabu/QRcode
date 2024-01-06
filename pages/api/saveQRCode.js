import dbConnect from "../../Utils/dbConnect";
import QRCode from "../../models/QRCode";

export default async function handler (req,res){
    await dbConnect();
    if (req.method==='POST'){
        try {
            const {text} = req.body;
            const newQRCode = new QRCode({text});
            await newQRCode.save();
            res.status(200).json({message : "QRCode saved successfully"})
        } catch (error) {
            res.status(500).json({messesage : "Error to save QRCode to the Database"});
            
        }
    }else{
        res.status(405).json({
            message : 'method not allowed'
        })
    }

}