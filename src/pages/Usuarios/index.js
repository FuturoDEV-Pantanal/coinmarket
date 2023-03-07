import { useEffect, useState } from 'react';
import './styles.css';

export default function Usuarios() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      .then(resp => resp.json())
      .then(dados => setUsuarios(dados))
      .catch(erro => console.log(erro));
  }, [])
  

  return (
    <>
      <h1 className='titulo-usuarios'></h1>
      {
        usuarios.map(u => {
          return (
            <div key={u.id} className="container-usuarios">
              <span>{u.id}</span> - 
              <span>{u.name}</span> - 
              <span>{u.email}</span>
            </div>
          )
        })
      }
    </>
  )
}
