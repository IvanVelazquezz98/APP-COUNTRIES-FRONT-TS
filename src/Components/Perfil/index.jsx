import React, { useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link , useHistory } from 'react-router-dom';
import styles from './Perfil.module.css'
import axios from "axios"

export default function ModalPerfil({closeModal , user}) {
  const [showError, setShow] = useState(true);
  const [countriesByUser, setCountriesByUser] = useState(null)


  async function handleCountriesForUser(user) {
    try {
      var json = await axios.get('http://localhost:3001/api/countries/CreatedForUser' , user.id)
      if (json.data.existe === true) {
        return setCountriesByUser(json.data.countries)
      } else {
        return setCountriesByUser(null)
      }
    } catch (error) {
      return 
    }
  }
  useEffect(() => {
    handleCountriesForUser(user)
  }, []);
  
  return (
    <>

      <Modal show={showError}>
        <Modal.Header closeButton onClick={() =>  closeModal()} >
          <Modal.Title> Hola de nuevo  {user.name}! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div><button className={styles.button}>✏️</button></div>
        <div>
          <img  className={styles.image} src={(user.imagen_profile !== null) ? (user.imagen_profile) : (<p>Image not found</p>) }/>
          </div>
          <div className={styles.content}>
            <h4 className={styles.continent}> Descripcion : {user.descripcion} </h4>
            <h4 className={styles.continent}> Email : {user.email} </h4>
            <h4> Puntuacion de Quiz: {  user?.point !== user.point ? <div> {user.point}</div> : 
            <div className={styles.content}>
                <p className={styles.continent}>Todavia no tienes puntuacion</p>
                <button className={styles.button}>Empezar Quiz</button>
            </div>  } 
            </h4>
          </div>
          <div className={styles.content}> <p className={styles.continent} >Paises creados por {user.name} :</p> <div>
            {countriesByUser  ? (countriesByUser.map((e) => { <div><div>
          <img  className={styles.image} src={e?.flag ? (e.flag) : (<p>Image not found</p>) }/>
          </div>
          <div>
                <h4 className={styles.continent}>{e.name}</h4>
          </div> 
          </div>})) :
             <p className={styles.continent} >No tienes paises creados :c <button className={styles.button} >Crea tu propio pais </button></p>  }
            </div> 
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}