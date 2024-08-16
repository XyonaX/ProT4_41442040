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
    };

    deleteBook = async (req, res) => {
        const book = req.body;
        const [result] = await pool.query(`DELETE FROM Libros where id=(?)`, [
            book.id,
        ]);
        res.json({ "Libro eliminado": result.affectedRows });
    };

    updateBook = async (req, res) => {
        const book = req.body;
        const [result] = await pool.query(
            `UPDATE Libros SET nombre=(?), autor=(?), categoria=(?), fecha_publicacion=(?), ISBN=(?) WHERE id=(?)`,
            [
                book.nombre,
                book.autor,
                book.categoria,
                book.fecha_publicacion,
                book.ISBN,
                book.id,
            ]
        );
        res.json({ "Libro Actualizado": result.changedRows });
    };

    getOne = async (req, res) => {
        try {
            const { id } = req.params;
            const [result] = await pool.query(
                `SELECT * FROM Libros WHERE id = ?`,
                [id]
            );
            if (result.length === 0) {
                return res
                    .status(404)
                    .json({ error: "No se encontró el libro" });
            }

            res.json(result[0]);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener el libro" });
        }
    };
}

export const libro = new LibroController();
