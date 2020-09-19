import { AbstractBaseFileStorage } from "./AbstractBaseFileStorage";
import fs from 'fs';
import path from 'path';
import { injectable } from "inversify";

@injectable()
export class LocalFileStorageStrategy extends AbstractBaseFileStorage {

    private rootFolderPath = "disk";

    async saveUploaded(file: Express.Multer.File): Promise<any> {
        const fileRealtivePath = await this.writeFile(file);
        return fileRealtivePath;
    }

    private writeFile(file: Express.Multer.File): Promise<string> {
        const fileName = this.generateFilename(file);
        return new Promise((resolve, reject) => {
            fs.writeFile(path.resolve(this.rootFolderPath, fileName), file.buffer, 'binary', err => {
                if (err) {
                    reject()
                } else {
                    resolve(`${this.rootFolderPath}/${fileName}`)
                }
            } )
        })
    }

}