import multer, { diskStorage } from "multer"
import path from "path"


const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./tmp")
    },
    filename: (req, file, cb) => {
        let random = `${Date.now() + Math.floor(Math.random() * 999999)}`
        cb(null, file.fieldname + random + path.extname(file.originalname))
    },
})

export const upload = multer({
    storage: storage, fileFilter: (req, file, cb) => {
        let requirements = /[\/.](gif|jpg|jpeg|png)$/i;
        if (!file.mimetype.match(requirements)) {
            return cb( new Error("error tipo de arquivo invalido"))
        }
        cb(null, true)

    }, limits: { fileSize: 50000000 }
})