import React, { useState } from 'react'

function Task() {
    const [checkedbtn, setcheckedbtn] = useState(false);
    const [editbtn, seteditbtn] = useState("off");
    const onchangebtn= (e)=>{
       if(e.currentTarget.checked) setcheckedbtn(true);
       else setcheckedbtn(false);
    }
    const editonchange=()=>{
       if (editbtn === "on")
        seteditbtn("off");
       else
        seteditbtn("on");
    }
  return (
    <div>
      <div className='flex border bg-white text-black p-4 m-2 justify-between rounded'>
        <input 
            type="checkbox"
            className='m-2 p-2 w-4'
            onChange={onchangebtn}
        />
        <input 
            type="text"
            className={`p-2 mr-3 outline-0 ${checkedbtn?'line-through':''}`}
            readOnly = {editbtn === "off"}
        />
        <div>
        <button 
            className='px-3 py-2 mr-2 border rounded hover:bg-blue-400'
            onChange={editonchange}
        >Edit</button>
        <button className='p-2  border rounded hover:bg-blue-400'>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Task
