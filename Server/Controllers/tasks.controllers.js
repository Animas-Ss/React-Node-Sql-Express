import {pool} from '../db.js';

export const getTasks = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM tasks ORDER BY createnAt ASC');
        console.log(result)
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getTask = async (req, res) => {
    try {
         //console.log(req.params.id);
        const [result] = await pool.query('SELECT * FROM tasks WHERE id=?',[req.params.id]);
        if(result.length === 0) {
        return res.status(404).json({message: "No Existe la tarea"})
        }

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const createTask = async (req, res) => {
    try {
        //console.log(req.body)
        const {titulo, descripcion} = req.body;
        const [result] = await pool.query('INSERT INTO tasks(titulo, descripcion) VALUES(?, ?)',[titulo, descripcion]);
        console.log(result);
        res.json({
          id: result.insertId,
          titulo,
          descripcion
         });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const updateTask = async (req, res) => {
    try {
        const result = await pool.query('UPDATE tasks SET ? WHERE id = ?',[req.body, req.params.id]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteTask = async (req, res) => {
    try {
        //console.log(req.params.id);
        const [result] = await pool.query('DELETE FROM tasks WHERE id = ?',[req.params.id]);

         if(result.affectedRows === 0){
         return res.status(404).json({ message: "Tarea no existe"});
    };
    return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};