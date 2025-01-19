import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//     cloud_name : process.env.CLODINARY_CLOUD_NAME,
//     api_key : process.env.CLODINARY_API_KEY,
//     api_secret : process.env.CLODINARY_API_SECRET_KEY
// })

cloudinary.config({
    cloud_name : "dfel75ojr",
    api_key : "631299454141755",
    api_secret : "e_BbD_-JecrtIr5iLY6Edfp_rXM"
})
const uploadImageClodinary = async (image) => {
    try {
        const buffer = Buffer.isBuffer(image)
            ? image
            : Buffer.from(await image.arrayBuffer());

        const uploadImage = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: "binkeyit" },
                (error, uploadResult) => {
                    if (error) {
                        return reject(error); // Reject on error
                    }
                    resolve(uploadResult);
                }
            ).end(buffer);
        });

        return uploadImage;
    } catch (error) {
        console.error("Cloudinary upload failed:", error);
        throw new Error("Image upload failed");
    }
};

export default uploadImageClodinary
