import React, { useState } from 'react'
import { Card } from '../../components/Card';
import './styles.css';

export function Home(){

  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);

  const myAvatar = 'https://github.com/nathanpalatin.png';

  const idStudent = Math.floor(Math.random() * 9999);

  function handleAddStudent (e){
    e.preventDefault();
    const newStudent = {
      id: idStudent,
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit'
      })
    }   

    setStudents(prevState => [...prevState, newStudent])
    
    e.target.reset();

  }
  
  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>Nathan Palatin</strong>
          <img src={myAvatar} alt="Foto de perfil" />
        </div>
      </header>
      <form onSubmit={handleAddStudent}>
      <input type="text" onChange={e => setStudentName(e.target.value)} placeholder="Digite o nome..." />
      <button type="submit">Adicionar</button>
      </form>
      {
      students.map(student => <Card key={student.id} name={student.name} time={"Hora: " + student.time}/>)
      }
      
      </div>
  )
}