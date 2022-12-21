import React, { useState } from 'react'
import { Card } from '../../components/Card';
import './styles.css';

export function Home(){

  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);

  function handleAddStudent (){
    const newStudent = {
      name: studentName || "undefined",
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit'
      })
    }   

    setStudents(prevState => [...prevState, newStudent])

  }
  
  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>Nathan Palatin</strong>
          <img src="https://github.com/nathanpalatin.png" alt="Foto de perfil" />
        </div>
      </header>
      <input type="text" onChange={e => setStudentName(e.target.value)} placeholder="Digite o nome..." />
      <button type="button" onClick={handleAddStudent}>Adicionar</button>
      {
      students.map(student => <Card key={student.time} name={"Nome: " + student.name} time={"Hora: " + student.time}/>)
      }
      </div>
  )
}