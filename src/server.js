import express from 'express';
import rootController from './controllers/root.controller';

const app = express();

app.get('/', rootController);

app.listen(8000, () => {});
