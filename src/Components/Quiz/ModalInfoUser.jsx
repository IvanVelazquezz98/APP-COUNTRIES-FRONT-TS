import React, { useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './ModalInfoUser.module.css'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import ModalDetail from '../DetailCountry';


export default function ModalInfoUser({closeModal , user}) {
  const [showError, setShow] = useState(true);
  const [countriesByUser, setCountriesByUser] = useState({existe:false , countries:[]})
  const [modalDetail, setOpenModalDetail] = useState(false)
  const [countrySelected, setCountrySelected] = useState(false)
  const detailUser = useSelector((state) => state.detailUser)


  const closeModalDetail  = () => {
    setCountrySelected(false)
    setOpenModalDetail(false)
  }

  const handleCoutrySelected = (e,c) => {
    setCountrySelected(c)
    setOpenModalDetail(true)
  }


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

 

  useEffect(() => {
    handleCountriesForUser(user)
  }, []);


  return (
    <>{modalDetail ? <ModalDetail user={detailUser} country={countrySelected} closeModal={closeModalDetail} /> : null}

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
           { ( (countriesByUser.countries?.length !== 0)   ? countriesByUser.countries?.map((c) => {
             return  (<div className={styles.divCountriesCreated} onClick={(e) => handleCoutrySelected(e,c)} ><p className={styles.info}> 🌍 {c?.name} </p> : <img className={styles.imageCountries}
                src={c?.flag ? (c.flag) : (<p className={styles.info}>Image not found</p>) }/></div> )    
            }) :
             <p className={styles.info}>El usuario no tiene paises creados</p>)  }
            </div>
            </div> 
            </div>
            <br></br>
            <div className={styles.content}><p className={styles.title}>Insignias del usuario :</p>
              <div className={styles.insignias}>
              {user.point > 20 ? <button title="Trofeo de bronce (20 preguntas correctas)" className={styles.insignia20}>👦</button> : null}
              {user.point > 35 ? <button title="Trofeo de plata (35 preguntas correctas)" className={styles.insignia50}>🌎</button> : null}
              {user.point > 50 ? <button title="Trofeo de oro (50 preguntas correctas)" className={styles.insignia70}>🏆</button> : null}
              {user.point > 70 ? <button title="Trofeo de diamante (70 preguntas correctas)" className={styles.insignia100}>🚀</button> : null}
            </div></div>


            
        </Modal.Body>
        
      </Modal>
    </>
  );
}