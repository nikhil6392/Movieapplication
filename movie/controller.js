import { getAll, remove } from "./model.js";

import { render } from "./view.js";

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