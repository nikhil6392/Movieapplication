import express from 'express'
import morgan from 'morgan';
import { createWriteStream} from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { router as movieRouter } from './movie/index.js';

const app = express();


app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`))


const accessLogStream = createWriteStream('access.log', {flags: 'a'});

app.use(morgan('common', {immediate: true, stream: accessLogStream}))

app.use(express.urlencoded({extended: false}))
app.use('/movie', movieRouter);


app.get('/', (req, res) => res.redirect('/movie'))

app.listen(8080,() =>{
    console.log(`Movie database accessible at http://localhost:8080`)
});