import React, { useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './ModalInfoUser.module.css'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';



export default function ModalInfoUser({closeModal , user}) {
  const [showError, setShow] = useState(true);
  const [countriesByUser, setCountriesByUser] = useState({existe:false , countries:[]})
  const detailUser = useSelector((state) => state.detailUser)





  async function handleCountriesForUser(user) {
    try {
      var json = await axios.get('http://localhost:3001/api/countries/user/' + user.id)
      if (json.data.existe === true) {
        return setCountriesByUser(json.data)
      } else {
        return setCountriesByUser(null)
      }
    } catch (error) {
      return 
    }
  }

  const handleLogOut = () => {
    localStorage.removeItem(user)
    window.location.reload();
  }

  useEffect(() => {
    handleCountriesForUser(user)
  }, []);


  return (
    <>

      <Modal show={showError}>
        <Modal.Header closeButton onClick={() =>  closeModal()} >
          <Modal.Title> Nombre de usuario: {user.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        
        <div className={styles.divImage}>
          <img  className={styles.image} src={(user?.imagen_profile !== null) ? (user?.imagen_profile) : (<p>Image not found</p>) }/>
          </div>
          <div className={styles.content}>
            <h4 className={styles.title}> Descripcion : <p className={styles.info}>{user?.descripcion ? user.descripcion : 
            <p className={styles.info}>-</p>}</p> </h4>
            <h4 className={styles.title}>Email : <p className={styles.info}>{user?.email}</p>  </h4>
            <h4 className={styles.title}> Puntuacion de Quiz: {  user.point  ? <div className={styles.title}> 
            <p className={styles.info}>{user.point}</p> </div> :
            <div className={styles.info} >
                <p  className={styles.info}>El suaurio no tiene puntuacion</p>
            </div>  } 
            </h4>
          </div>
          <div className={styles.content}> <div className={styles.title}><p className={styles.title} >Paises creados por {user?.name} :</p>  <div>
           { ( (countriesByUser.countries?.length !== 0)   ? countriesByUser.countries?.map((e) => {
             return  (<div className={styles.divCountriesCreated} ><p className={styles.info}> 🌍 {e?.name} </p> : <img className={styles.imageCountries}
                src={e?.flag ? (e.flag) : (<p className={styles.info}>Image not found</p>) }/></div> )    
            }) :
             <p className={styles.info}>El usuario no tiene paises creados</p>)  }
            </div>
            </div> 
            </div>

            
        </Modal.Body>
        
      </Modal>
    </>
  );
}