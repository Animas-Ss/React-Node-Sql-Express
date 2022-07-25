import TareaCarta from '../Components/TareaCarta';
import {useEffect} from 'react';

import { useTarea } from '../Context/TasksProvider';

const TasksPage = () => {

  const {cargaTareas,info} = useTarea()

  useEffect(() => {
    cargaTareas()
  }, []);

function RenderMain(){
if(info.length === 0){
return (<h1>No existen tareas</h1>)
}
return info.map((tarea) =>(<TareaCarta  key={tarea.id} tarea={tarea}/>))
}

  return (
    <div>
      <h1 className='text-5x1 text-white font-bold text-center'>Tareas</h1>
      <div className='grid grid-cols-3 gap-2'>{RenderMain()}</div>
    </div>
  )
};

export default TasksPage;