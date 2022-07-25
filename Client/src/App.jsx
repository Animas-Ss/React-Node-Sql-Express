import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navegacion from './Components/Navegacion';

import NotFount from './Pages/NotFount';
import TasksForm from './Pages/TasksForm';
import TasksPage from './Pages/tasksPage';

import { TareaContextoProvider } from './Context/TasksProvider';

const App = () => {
  return (
  <div className='bg-zinc-900 h-screen'>
     <Navegacion/>
    <div className='container mx-auto py-4 px-20'>
    <TareaContextoProvider>
      <Routes>
      <Route path='/' element={<TasksPage/>} />
      <Route path='/new' element={<TasksForm/>} />
      <Route path='/edit/:id' element={<TasksForm/>} />
      <Route path='*' element={<NotFount/>} />
    </Routes>
    </TareaContextoProvider>
  </div>
  </div>
  )
}

export default App;