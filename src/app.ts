import express from 'express';
import router from './routes';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use('/api', router)


export default app;
