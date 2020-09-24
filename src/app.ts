import express from 'express';
import router from './routes';
import morgan from 'morgan'
import path from 'path';

const app = express();

app.use(morgan('dev'));
app.use('/disk', express.static(path.resolve('disk')));
app.use('/api', router)


export default app;
