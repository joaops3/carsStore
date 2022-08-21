import multer, { diskStorage } from "multer"
import path from "path"
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3"
import aws from "aws-sdk"
const dotenv = require("dotenv")
const multerS3 = require("multer-s3")

dotenv.config()

export const s3 = new S3Client({ region: process.env.AWS_DEFAULT_REGION, credentials: { accessKeyId: process.env.AWS_ACESS_KEY_ID as string, secretAccessKey: process.env.AWS_SECRET_ACESS_KEY as string } })
export const deleteaws = new aws.S3({ region: process.env.AWS_DEFAULT_REGION, credentials: { accessKeyId: process.env.AWS_ACESS_KEY_ID as string, secretAccessKey: process.env.AWS_SECRET_ACESS_KEY as string } })


const storageTypes = {
    local: diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./tmp")
        },
        filename: (req, file, cb) => {
            let random = `${Date.now() + Math.floor(Math.random() * 999999)}`
            cb(null, file.fieldname + random + path.extname(file.originalname))
        },
    }),
    s3: multerS3({
        s3: s3, bucket: process.env.AWS_BUCKET, contentType: multerS3.AUTO_CONTENT_TYPE, acl: "public-read",
        key: (req: any, file: any, cb: any) => {
            let random = `${Date.now() + Math.floor(Math.random() * 999999)}`

            cb(null, file.fieldname + random + path.extname(file.originalname))
        }
    })
}


export const upload = multer({
    storage: storageTypes.s3, fileFilter: (req, file, cb) => {
        let requirements = /[\/.](gif|jpg|jpeg|png|svg|webp)$/i;
        if (!file.mimetype.match(requirements)) {
            return cb(new Error("error tipo de arquivo invalido"))
        }
        cb(null, true)

    }, limits: { fileSize: 50000000 }
})