import express from 'express'
import { router as movieRouter } from './movie/index.js';

const app = express();

app.use('/movie', movieRouter)

app.get('/', (req, res) => res.redirect('/movie'))

app.listen(8080,() =>{
    console.log(`Movie database accessible at http://localhost:8080`)
});