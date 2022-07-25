import { useTarea } from '../Context/TasksProvider';
import { useNavigate } from 'react-router-dom';

const TareaCarta = ({tarea}) => {
    const { eliminarTarea, estadoTarea } = useTarea();
    // usamos el hook de react router para poder crear una navegacion con el boton de editar
    const navigate = useNavigate()

    const handleToggle = async () => {
      await estadoTarea(tarea.id)
    }
     
  return (
    <>
    <div className='bg-zinc-700 text-white rounded-md'>
      <header className='bg-slate-400 w-full flex justify-between px-5 py-2 rounded-md' >
      <h3 className='text-sm font-bold'>{tarea.titulo}</h3>
      <span>{tarea.done == 1 ? <div className='bg-zinc-100 rounded-full w-6 h-6 text-center'>✔️</div>: <div className='bg-zinc-100 rounded-full w-6 h-6 text-center'>❌</div>}</span>
      </header>
        
        <p className='text-xs px-5'>{tarea.descripcion}</p>
        <span className='px-5'>{tarea.createnAt}</span>

        <div className='flex px-5 justify-center items-center w-full gap-x-2'>
        <button onClick={() => eliminarTarea(tarea.id)} className='bg-slate-300 px-2 py-1 text-black rounded-sm'>Eliminar</button>
        <button onClick={() => navigate(`/edit/${tarea.id}`)} className='bg-slate-300 px-2 py-1 text-black'>Editar</button>
        <button onClick={() => handleToggle(tarea.done)} className='bg-slate-300 px-2 py-1 text-black' >Estado</button>
        </div>

    </div>
    </>
  )
}

export default TareaCarta;