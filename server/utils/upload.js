import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url : `mongodb+srv://${username}:${password}@cluster0.jpnemmp.mongodb.net/?retryWrites=true&w=majority`,
    options:{useNewUrlParser:true},
    file:(request,file)=>{
        const match = ["image/png","image/jpg"];
        
        if(match.indexOf(file.memeType) === -1){
            return`${Date.now()}-blog-${file.originalname}`;
        }
        // if (match.indexOf(file.mimetype) === -1) { // Corrected 'memeType' to 'mimetype'
        //     return `${Date.now()}-blog-${file.originalname}`;
        // } 
        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
}) 

export default multer({storage});