import React from 'react'
import Task from './Task'

function Inputfield() {
  return (
    <div>
       <div className='bg-gray-200 border rounder text-black mx-auto w-max my-4' >
          <h1 className='text-4xl text-pink-800 text-shadow-blue-200 p-4 flex justify-center'>Todo App</h1>
          <div>
            <input
              type="text"
              placeholder='Enter tasks'
              className='border-gray-600 w-120 bg-gray-500 text-white p-4 my-4 ml-4 rounded outline-0'
           />
           <span className='border-blue-600 bg-blue-700 text-white px-6 py-4 mr-2 rounded hover:bg-blue-800'>Add</span>
          </div>
      <Task/>
      </div>
    </div>
  )
}

export default Inputfield
