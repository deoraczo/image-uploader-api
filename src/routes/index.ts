import { Router } from 'express';
import { uploaderController } from '../controllers/UploaderController';
import  multerConfig  from '../config/muilter.config';

const router = Router();

router.route('/uploads')
    .post(multerConfig, uploaderController.saveUpload);


export default router;

