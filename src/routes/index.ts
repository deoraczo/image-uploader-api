import { Router } from 'express';
import { uploaderController } from '../controllers/UploaderController';

const router = Router();

router.route('/uploads')
    .post(uploaderController.saveFile);


export default router;

