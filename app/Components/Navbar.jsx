import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-3 flex-wrap justify-around'>
        <h1 className='text-lg font-medium'>Todo App</h1>
        <ul className='flex gap-[40px] font-medium'>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contect</li>
        </ul>
    </div>
  )
}

export default Navbar