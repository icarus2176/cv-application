import { useState } from 'react'
import './styles/App.css'
import General from './components/general.jsx'
import { Educational } from './components/educational.jsx'
import Work from './components/work.jsx'

export default function App() {

  const [educationNum, setEducationNum] = useState(1);
  const [workNum, setWorkNum] = useState(1);

  let allEducation = [];
  for(let i = 0; i < educationNum; i++){
    allEducation.push(<Educational key={i}/>)
  }

  const addEducation = () => {
    setEducationNum(educationNum + 1)
  }

  const deleteEducation = () => {
    setEducationNum(educationNum - 1)
  }

  let allWork = [];
  for(let i = 0; i < workNum; i++){
    allWork.push(<Work key={i}/>)
  }

  const addWork = () => {
    setWorkNum(workNum + 1)
  }

  const deleteWork = () => {
    setWorkNum(workNum - 1)
  }

  return (
    <>
      <h1>CV Application</h1>
      <div className="section">
        <h2>Personal Information</h2>
          <General/>
          </div>
        <div className="section">
        <h2>Educational Experience</h2>
          <div>{allEducation}</div>
          <div className="buttonHolder">
            <button className="add" onClick={addEducation}>Add Education Experience</button>
            <button className="delete" onClick={deleteEducation} style={{ display: educationNum > 0 ? 'block' : 'none'}}>Delete Education Experience</button>
          </div>
        </div>
      <div className="section">
        <h2>Work Experience</h2>
          <div>{allWork}</div>
          <div className="buttonHolder">
            <button className="add" onClick={addWork}>Add Work Experience</button>
            <button className="delete" onClick={deleteWork} style={{ display: workNum > 0 ? 'block' : 'none'}}>Delete Work Experience</button>
          </div>
      </div>
    </>
  )
}
