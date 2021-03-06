import { Request, Response } from "express";
import { FileStorageStrategy } from "../strategies/FileStorageStrategy";
import { lazyInject } from "../ioc/container";
import { TYPES } from "../ioc/types";

class UploaderController {

  @lazyInject(TYPES.LOCAL_FILE_STORAGE)
  private fileSotarge!: FileStorageStrategy;

  saveUpload = async (req: Request, res: Response) => {
        try {
            const fileRelativePath = await this.fileSotarge.saveUploaded(req.file);
            return res.json({
                message: "Image uploaded successfully.",
                previewUrl: `${req.protocol}://${req.get('host')}/${fileRelativePath}`,
            });
        } catch (error) {
            return res.status(422).json({
                message: 'Image upload failed.' + error
            });
        }
  };
}

export const uploaderController = new UploaderController();
