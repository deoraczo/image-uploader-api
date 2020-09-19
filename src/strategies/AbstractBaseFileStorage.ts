import { FileStorageStrategy } from "./FileStorageStrategy";
import path from 'path'
import { v4 as uuidV4 } from 'uuid';
import { injectable } from "inversify";

@injectable()
export abstract class AbstractBaseFileStorage implements FileStorageStrategy{

    abstract saveUploaded(file: Express.Multer.File): Promise<string>;

    protected generateFilename(file: Express.Multer.File): string {
        const timestamp = (new Date()).getTime().toString();
        const ext = path.extname(file.originalname);
        const uuid = uuidV4();
        return `${timestamp}.${uuid}${ext}`;
    }
}