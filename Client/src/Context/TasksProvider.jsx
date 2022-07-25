import { useContext } from 'react';
import { useState } from 'react';
import { contestoTareas } from './TasksContext';

import { getTasksRequest, deleteTasksRequest, createTasksRequest, getTaskRequest, updateTaskRequest, toggleTaskRequest } from '../Api/tasks.api';

export const useTarea = () => {
    const context = useContext(contestoTareas);
    if(!context){
        throw new Error("useTarea debe ser usado dentro de TareaContextoProvider")
    }
    return context;
}



export const TareaContextoProvider = ({ children }) => {

    const [info, setInfo] = useState([]);

    const cargaTareas = async () => {
        const respuesta = await getTasksRequest();
        //console.log(respuesta.data);
        setInfo(respuesta.data);
    }
    
    const eliminarTarea = async (id) => {
        //console.log(id)
        try {
            const respuesta = await deleteTasksRequest(id);
            console.log(respuesta)
            //para actualizar la eliminacion desde el fronten sin necesidad de pedirle al backend 
            setInfo(info.filter((item) => item.id !== id));
        } catch (error) {
            console.log(error.message)
        }
    };

    const crearTarea = async (tarea) => {
        try {
            const response = await createTasksRequest(tarea);
            //console.log(response.data);
            //para agregar la tarea al arreglo sin pedircelas al back-end mediante spred-opereitor!
            //setInfo([... info, response.data])
          } catch (error) {
            console.log(error);
          }
    }

    const pedirTarea = async (id) => {
        try {
           const response = await getTaskRequest(id);
           return response.data
        } catch (error) {
            console.log(error.message);
        }
     
    }

    const actualizarTarea = async (id, nuevoCampo) => {
       try {
        const response = await updateTaskRequest(id, nuevoCampo);
        console.log(response);
       } catch (error) {
        console.log(error.message);
       }
    }

    const estadoTarea = async (id, done) => {
        try {
            const encontrada = info.find((tarea) => tarea.id === id)
            await toggleTaskRequest(id, encontrada.done === 0 ? true : false)
            setInfo(info.map((tarea) => tarea.id === id ? {...tarea, done: !tarea.done}: tarea))
        } catch (error) {
            console.log(error);
        }
    }



    return(
        <contestoTareas.Provider value={{
            info,
            cargaTareas,
            eliminarTarea,
            crearTarea,
            pedirTarea,
            actualizarTarea,
            estadoTarea
        }}>
            { children }
        </contestoTareas.Provider>
    );
};