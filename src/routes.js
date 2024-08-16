import { Router } from "express";
import { libro } from "./controller.js";


export const router = Router();


router.get('/libros', libro.getAll);
router.post('/libro', libro.addBook);
router.delete('/libro',libro.deleteBook);
router.put("/libro",libro.updateBook);
router.get('/libros/:id',libro.getOne);