import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//     cloud_name : process.env.CLODINARY_CLOUD_NAME,
//     api_key : process.env.CLODINARY_API_KEY,
//     api_secret : process.env.CLODINARY_API_SECRET_KEY
// })

cloudinary.config({
    cloud_name : "do5krinsp",
    api_key : "671877216649763",
    api_secret : "surA7UKp8YMeAK4cDSzK1c1HP1M"
})

const uploadImageClodinary = async(image)=>{
    const buffer = image?.buffer || Buffer.from(await image.arrayBuffer())

    const uploadImage = await new Promise((resolve,reject)=>{
        cloudinary.uploader.upload_stream({ folder : "binkeyit"},(error,uploadResult)=>{
            return resolve(uploadResult)
        }).end(buffer)
    })

    return uploadImage
}

export default uploadImageClodinary
