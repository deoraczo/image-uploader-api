import { Request, Response } from 'express';
class UploaderController {

    saveFile = (req: Request, res: Response) => {

        return res.json({ message: 'falied' })
    }

}

export const uploaderController = new UploaderController();