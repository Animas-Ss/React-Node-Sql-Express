//console.log('Hello Word!!'); verificar el funcionamiento de nodemon !!
import express from 'express';
import cors from 'cors';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import {PORT} from './config.js'
import indexRouter from './Routes/index.routes.js';
import tasksRoutes from './Routes/tasks.routes.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors()); //*!nos permite darles permisos a otros puertos de conectar con nuestro back-end!
app.use(express.json());

app.use(indexRouter);
app.use(tasksRoutes);

app.use(express.static(join(__dirname, '../Client/dist')))

app.listen(PORT);
console.log(`Servidor Listo y corriendo en el puerto ${PORT}`);