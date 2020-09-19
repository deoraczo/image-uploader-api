export interface FileStorageStrategy {
    saveUploaded(file: Express.Multer.File): Promise<string>;
}