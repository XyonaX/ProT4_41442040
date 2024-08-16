import { pool } from "./database.js";

class LibroController {
    getAll = async (req, res) => {
        try {
            const [result] = await pool.query("SELECT * FROM `Libros`");
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener los libros" });
        }
    };

    addBook = async (req, res) => {
        try {
            const book = req.body;
            const [result] = await pool.query(
                `INSERT INTO Libros(nombre, autor, categoria, fecha_publicacion, ISBN) VALUES (?,?,?,?,?)`,
                [
                    book.nombre,
                    book.autor,
                    book.categoria,
                    book.fecha_publicacion,
                    book.ISBN,
                ]
            );
            res.json({ "Id insertado": result.insertId });
        } catch (error) {
            res.status(500).json({ error: "Error al agregar el libro" });
        }
    };

    deleteBook = async (req, res) => {
        try {
            const book = req.body;
            const [result] = await pool.query(`DELETE FROM Libros where id=?`, [
                book.id,
            ]);
            if (result.affectedRows > 0) {
                res.json({ message: "Libro eliminado con éxito" });
            } else {
                res.status(404).json({ error: "No se encontró el libro" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar el libro" });
        }
    };

    deleteBookISBN = async (req, res) => {
        try {
            const { ISBN } = req.params;
            const [result] = await pool.query(
                `DELETE FROM Libros where ISBN=?`,
                [ISBN]
            );
            if (result.affectedRows > 0) {
                res.json({ message: "Libro eliminado con éxito" });
            } else {
                res.status(404).json({ error: "No se encontró el libro con ese ISBN" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar el libro" });
        }
    };

    updateBook = async (req, res) => {
        try {
            const book = req.body;
            const [result] = await pool.query(
                `UPDATE Libros SET nombre=?, autor=?, categoria=?, fecha_publicacion=?, ISBN=? WHERE id=?`,
                [
                    book.nombre,
                    book.autor,
                    book.categoria,
                    book.fecha_publicacion,
                    book.ISBN,
                    book.id,
                ]
            );
            if (result.changedRows > 0) {
                res.json({ message: "Libro actualizado con éxito" });
            } else {
                res.status(404).json({ error: "No se encontró el libro" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error al actualizar el libro" });
        }
    };

    getOne = async (req, res) => {
        try {
            const { id } = req.params;
            const [result] = await pool.query(`SELECT * FROM Libros WHERE id = ?`, [id]);
            if (result.length === 0) {
                return res.status(404).json({ error: "No se encontró el libro" });
            }
            res.json(result[0]);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener el libro" });
        }
    };
}

export const libro = new LibroController();
