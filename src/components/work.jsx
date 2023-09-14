import { useState } from 'react'

export default function Work() {
  
  const [editable, setEditable] = useState(true)
  const [workInfo, setWorkInfo] = useState({
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: ''
  })

  function updateData(e){
    setWorkInfo({...workInfo,[e.target.name]: e.target.value})
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
          <label htmlFor='company'>Company</label>
          <input type='text' name='company' onChange={updateData} value={workInfo.company}/>
          <label htmlFor='position'>Position</label>
          <input type='text' name='position' onChange={updateData} value={workInfo.position}/>
          <label htmlFor='responsibilities'>Responsibilities</label>
          <textarea type='text' name='responsibilities' onChange={updateData} value={workInfo.responsibilities}/>
          <label htmlFor='startDate'>Start Date</label>
          <input className="date" type='date' name='startDate' onChange={updateData} value={workInfo.startDate}/>
          <label htmlFor='endDate'>End Date</label>
          <input className="date" type='date' name='endDate' onChange={updateData} value={workInfo.endDate}/>
          <input className="submit" type="submit"/>
        </form>

        <div className="info" style={{ display: editable ? 'none' : 'block'}}> 
          <label htmlFor='company'>Company</label>
          <div>{workInfo.company}</div>
          <label htmlFor='Position'>Position</label>
          <div>{workInfo.position}</div>
          <label htmlFor='responsibilities'>Responsibilities</label>
          <div>{workInfo.responsibilities}</div>
          <label htmlFor='startDate'>Start Date</label>
          <div>{workInfo.startDate}</div>
          <label htmlFor='endDate'>End Date</label>
          <div>{workInfo.endDate}</div>
          <button className="edit" onClick={changeEdit}>Edit</button>
        </div>
      </>
    )
}