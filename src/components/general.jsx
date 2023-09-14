import React, { useState } from 'react'

export default function General() {

  const [editable, setEditable] = useState(true)
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const updateData = (e) => {
    e.preventDefault();
    setGeneralInfo({...generalInfo, [e.target.name]: e.target.value})
  }

  const changeEdit = (e) => {
    e.preventDefault()
    if (editable == true){
      setEditable(false)
    }
    else{
      setEditable(true)
    }
  }
  
  return(
    <>
      <form onSubmit={changeEdit} style={{ display: editable ? 'block' : 'none'}}>
        <label htmlFor='name'>Full Name</label>
        <input type='text' name='name' onChange={updateData} value={generalInfo.name}/>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' onChange={updateData} value={generalInfo.email}/>
        <label htmlFor='phone'>Phone</label>
        <input type='number' name='phone' onChange={updateData} value={generalInfo.phone}/>
        <input className="submit" type="submit"/>
      </form>

      <div className="info" style={{ display: editable ? 'none' : 'block'}}>  
        <label htmlFor='name'>Full Name</label>
        <div>{generalInfo.name}</div>
        <label htmlFor='email'>Email</label>
        <div>{generalInfo.email}</div>
        <label htmlFor='phone'>Phone</label>
        <div>{generalInfo.phone}</div>
        <button className="edit" onClick={changeEdit}>Edit</button>
      </div>
    </>
  )
}
  