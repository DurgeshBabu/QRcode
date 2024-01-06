import dbConnect from "../../Utils/dbConnect";
import QRCode from "../../models/QRCode";

export default async function handler(req,res){
    await dbConnect();
    if(req.method==='GET'){
        try {
            const {searchText} = req.body;
        const regex = new RegExp(searchText,'i');
        const searchedCodes = await QRCode.find({text:regex});
        res.status(200).json(searchedCodes);
        } catch (error) {
            res.status(500).json({message:'error fetching QRCode from data base'});
        }
    }else{
        res.status(405).json({message:'method not allowed'})
    }
}