import React from 'react'
import { Form, Formik } from 'formik';
import { useTarea } from '../Context/TasksProvider';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

const TasksForm = () => {

  const { crearTarea, pedirTarea, actualizarTarea } = useTarea();
  const [tarea, setTarea] = useState({
    titulo: "",
    descripcion: ""
  });

  const params = useParams();
  const navigate = useNavigate();

  //console.log(params);

  useEffect(() => {
    const loadTask = async () => {
    if(params.id){
      const tarea = await pedirTarea(params.id);
      //console.log(tarea);
      setTarea({
        titulo : tarea.titulo,
        descripcion: tarea.descripcion
      })
    }
  }
  loadTask();
  }, [])

  return (
    <div>
        <Formik
        initialValues={ tarea }
        enableReinitialize = {true}
        onSubmit = { async (values, actions) => {
          //console.log(values);
          if(params.id){
            //console.log("actualizar");
            await actualizarTarea(params.id, values)
            navigate("/");
          }else{
            await crearTarea(values);
            actions.resetForm();
            navigate("/");
          }
        }}
        >
          {({handleChange, handleSubmit, values, isSubmitting}) => (
               <Form onSubmit={handleSubmit} className='bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10'>
                <h1 className='text-xl font-bold uppercase text-center'>{params.id ? "Editar Tarea" : "Crear Tarea"}</h1>
                 <label className='block'>Titulo</label>
                 <input type="text" name="titulo" placeholder='Escriba un titulo'onChange={handleChange} value={values.titulo} className='px-2 py-1 rounded-sm w-full'/>
        
                 <label className='block'>Descripcion</label>
                 <textarea type="text" name='descripcion' rows='3' placeholder='Escriba una descripcion' onChange={handleChange} value={values.descripcion} className='px-2 py-1 rounded-sm w-full'/>
                 
                 <button type='submit'disabled={isSubmitting} className='block bg-indigo-500 px-2 py-1 text-white w-full rounded-md' >
                  {isSubmitting ? "Guardando..." : "Guardar"}
                 </button>
               </Form>
          )}
        </Formik>
    </div>
  )
}

export default TasksForm;