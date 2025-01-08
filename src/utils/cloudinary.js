import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});



const uploadOnCloudinary  = async(localFilePath) =>{
    try {
        if(!localFilePath) return null
       const response = await cloudinary.uploader.upload(
            localFilePath , {
                resource_type:'auto'
            }
        )
        console.log("File uploaded on cloudinary. File Path : "+ response.url)


        // once the file uploaded we would like to delete it form our server 
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
       fs.unlinkSync(localFilePath)
       return nulll;
    }
}


export {uploadOnCloudinary};