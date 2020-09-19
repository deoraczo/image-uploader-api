import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const mimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
    if (mimeTypes.indexOf(file.mimetype) > -1) {
        cb(null, true)
    } else {
        cb(null, false)
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}

export default multer({
    fileFilter
}).single('image')