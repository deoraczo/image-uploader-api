import { Request, Response } from 'express';
class UploaderController {

    saveUpload = (req: Request, res: Response) => {
        return res.json({ message: 'falied' })
    }

}

export const uploaderController = new UploaderController();