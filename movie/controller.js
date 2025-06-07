import { getAll, remove, get } from "./model.js";

import { render } from "./view.js";
import { render as form } from './form.js'

export async function listAction(req, res){
  try {
    const data = await getAll();
    const body = render(data)
    res.send(body)
    
  } catch (error) {
    res.status(500).send("Internal Server Error")
  }
}

export async function removeAction(req, res) {
    try {
        const id = parseInt(req.params.id, 10);

        if(isNaN(id)){
            return res.status(400).send("Invalid Id")
        }
        await remove(id);
        res.redirect(req.baseUrl)
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}

export async function formAction(req, res) {
    let movie = { id: '' , title: '' , year: ''}

    if(req.params.id){
        movie = await get(parseInt(req.params.id, 10));
    }

    const body = form(movie)
    res.send(body)
}

export async function saveAction(req, res) {
    const movie = {
        id: req.movie.id,
        title: req.movie.title,
        year: req.movie.year,
    };

    await save(movie);
    res.redirect(req.baseUrl)
    
}