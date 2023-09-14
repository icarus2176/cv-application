import { useState } from 'react'

export function Educational() {
  
  const [editable, setEditable] = useState(true)
  const [educationalInfo, setEducationalInfo] = useState({
    school: '',
    studyTitle: '',
    studyDate: ''
  })

  function updateData(e){
    setEducationalInfo({...educationalInfo,[e.target.name]: e.target.value})
  }

  function changeEdit(e){
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
          <label htmlFor='school'>School Name</label>
          <input type='text' name='school' onChange={updateData} value={educationalInfo.school}/>
          <label htmlFor='studyTitle'>Title of Study</label>
          <input type='text' name='studyTitle' onChange={updateData} value={educationalInfo.studyTitle}/>
          <label htmlFor='studyDate'>Date of Study</label>
          <input className="date" type='date' name='studyDate' onChange={updateData} value={educationalInfo.studyDate}/>
          <input className="submit" type="submit"/>
        </form>
      
        <div className="info" style={{ display: editable ? 'none' : 'block'}}> 
          <label htmlFor='school'>School Name</label>
          <div>{educationalInfo.school}</div>
          <label htmlFor='studyTitle'>Title of Study</label>
          <div>{educationalInfo.studyTitle}</div>
          <label htmlFor='studyDate'>Date of Study</label>
          <div>{educationalInfo.studyDate}</div>
          <button className="edit" onClick={changeEdit}>Edit</button>
        </div>
      </>
    )
}