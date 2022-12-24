import React, { useState, useEffect } from 'react';
import { Card, Cardprops } from '../../components/Card';
import { DiApple } from "react-icons/di";
import './styles.css';

type ProfileResponse = {
  name: string;
  avatar_url: string;
  login: string;
}

type User = {
  name: string;
  avatar: string;
  login: string;
}

export function Home(){

  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState<Cardprops[]>([]);
  const [user, setUser] = useState<User>({} as User);
 

  useEffect(() => {
    async function fetchData(){
    const response = await fetch('https://api.github.com/users/nathanpalatin');
    const data = await response.json() as ProfileResponse;

    setUser({
      name: data.name,
      avatar: data.avatar_url,
      login: data.login
     });
    }
    fetchData();
  }, []);


  function uniqueID(id: number | string) {
    return Math.floor(Math.random() * Date.now()).toString(16)
  };

  function handleAddStudent (e: any){
    e.preventDefault();
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }   

    setStudents(prevState => [...prevState, newStudent])
  
    e.target.reset();

  }
  
  return (
    
    <div className="container">
      <header>
        <h1><DiApple /> Lista de Presença</h1>
        <div>
          <span>{user.login}</span>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
      <form onSubmit={handleAddStudent}>
      <input type="text" onChange={e => setStudentName(e.target.value)} placeholder="Digite o nome..." />
      <button type="submit">Adicionar</button>
      </form>
      {
      students.map(student => <Card key={uniqueID(99999)} name={student.name} time={student.time}/>)
      }
      </div>
  
  )
}
