--tABLA DE TAREAS
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    descripcion VARCHAR(300),
    done BOOLEAN NOT NULL DEFAULT 0,
    createnAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);