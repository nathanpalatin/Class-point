import { useState, useEffect } from 'react';
import './styles.css';
import { IoLocation } from 'react-icons/io5';
import { FaDev } from 'react-icons/fa';
import reactjs from '../../assets/reactjs.svg';
import reactnative from '../../assets/react-native.svg';
import php from '../../assets/php.svg';

type ProfileResponse = {
  name: string;
  avatar_url: string;
  login: string;
  bio: string;
  html_url: string;
  location: string;
}



type User = {
  name: string;
  avatar: string;
  login: string;
  bio: string;
  url: string;
  location: string;
}

export function Home() {

  const moonLanding = new Date();

  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    async function fetchData(){
    const response = await fetch('https://api.github.com/users/nathanpalatin');
    const data = await response.json() as ProfileResponse;

    setUser({
      name: data.name,
      avatar: data.avatar_url,
      login: data.login,
      bio: data.bio,
      url: data.html_url,
      location: data.location
     });
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="header"></div>
      <aside>
      <div className="cards profile">
            
            <img src={user.avatar} alt="My Profile" />
            <div>
            <h1>{user.name}</h1>
            <span><FaDev /> {user.bio}</span>
            <span><IoLocation /> {user.location}</span>
          
            </div>
            </div>
     

     
      <div className="cards friends">
          <h1>Relacionamentos</h1>
          <div>
            <span>Nenhuma conexão até o momento.</span>
          </div>
      </div>

      <div className="cards wins">
          <h1>Insígnias</h1>
          <div>
            <img src={reactjs} className="tooltip" data-tip="ReactJS" alt="React JS" />
            <img src={reactnative} className="tooltip" data-tip="React Native" alt="React Native" />
            <img src={php} className="tooltip" data-tip="PHP" alt="PHP" />
          </div>
      </div>
      </aside>
      
    <main>
        <div className="cards feed">
        <h1>Atualizações</h1>
        <div>
        <span>Nenhuma novidade até o momento.</span>
        </div>
        </div>
          
      </main>
      <footer>
      <a href={user.url} target="_blank" rel="external">PALATINI &copy; {moonLanding.getFullYear()}  - Todos os direitos reservados.</a>
      </footer>
    </>
  )
}
