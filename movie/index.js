import { Router } from "express";
import { formAction, listAction, removeAction } from "./controller.js";

const router = Router();

router.get('/', listAction)
router.get('/delete/:id', removeAction)
router.get('/movie/form/:id', formAction);

export {router}

