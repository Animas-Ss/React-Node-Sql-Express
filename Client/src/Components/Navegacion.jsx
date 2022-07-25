import React from 'react'
import { Link } from 'react-router-dom'

const Navegacion = () => {
  return (
    <div className='bg-neutral-800 flex justify-between px-20 py-4'>
      <Link to='/' className='text-white font-bold'>
      <h1>React-MySQL</h1>
      </Link>
        
        <ul className='flex gap-x-5'>
            <li>
                <Link to="/" className='bg-slate-200 px-2 py-1'>Inicio</Link>
            </li>
            <li>
                <Link to="/new" className='bg-teal-300 px-2 py-1'>Crear</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navegacion