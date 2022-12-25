import { useState, useEffect } from 'react';
import './styles.css';

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
      <div className="cards">
            
            <img src={user.avatar} alt="My Profile" />
            <div>
            <h1>{user.name}</h1>
            <span>{user.bio}</span>
            <span>{user.location}</span>
          
            </div>
            </div>
      </aside>
      
    <main>
        <div className="cards">
        <h1>My Projects | React</h1>
        </div>
        <section className="cards">
             
        </section>      
      </main>
      <footer>
      <a href={user.url} target="_blank" rel="external">PALATINI &copy; {moonLanding.getFullYear()}  - All rights reserved.</a>
      </footer>
    </>
  )
}
