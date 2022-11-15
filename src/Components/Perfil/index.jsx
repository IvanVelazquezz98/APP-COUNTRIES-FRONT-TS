import React, { useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './Perfil.module.css'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import ModalCreateCountry from '../CreateCountries';
import ModalUpdateUser from './ModalUpdate';
import ModalDetail from '../DetailCountry';

export default function ModalPerfil({closeModal , user}) {
  const [showError, setShow] = useState(true);
  const [countriesByUser, setCountriesByUser] = useState({existe:false , countries:[]})
  const [createCountry , setCreateCountry] = useState(false)
  const [updateUser , setUpdateUser] = useState(false)
  const detailUser = useSelector((state) => state.detailUser)
  const [modalDetail, setOpenModalDetail] = useState(false)
  const [countrySelected, setCountrySelected] = useState(false)

  const handleCloseCreateCountry = () => {
    setCreateCountry(false)
  }

  const handleCloseModalUpdate = () => {
    setUpdateUser(false)
  }
  const closeModalDetail  = () => {
    setCountrySelected(false)
    setOpenModalDetail(false)
  }

  async function handleCountriesForUser(user) {
    try {
      var json = await axios.get('https://deploy-countries-app-production.up.railway.app/api/countries/user/' + user.id)
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
    localStorage.removeItem('user')
    window.location.reload();
  }

  const handleCoutrySelected = (e,c) => {
    setCountrySelected(c)
    setOpenModalDetail(true)
  }

  useEffect(() => {
    handleCountriesForUser(user)
  }, []);


  return (
    <>
    {modalDetail ? <ModalDetail user={detailUser} country={countrySelected} closeModal={closeModalDetail} /> : null}

      <Modal show={showError}>
        <Modal.Header closeButton onClick={() =>  closeModal()} >
          <Modal.Title> Hola de nuevo  {user?.name}! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {createCountry ? <ModalCreateCountry user={detailUser} handleClose={handleCloseCreateCountry}/> : null}
          {updateUser ? <ModalUpdateUser user={detailUser} closeModal={handleCloseModalUpdate}/> : null}

          <div><button className={styles.button} onClick={() => handleLogOut()}>Cerrar Sesion 👋</button></div>
            <div className={styles.divEditUser}><button className={styles.button} onClick={() => setUpdateUser(true)}>✏️</button></div>
        <div className={styles.divImage}>
          <img  className={styles.image} loading="lazy" src={(user?.imagen_profile !== null) ? (user?.imagen_profile) : (<p>Image not found</p>) }/>
          </div>
          <div className={styles.content}>
            <h4 className={styles.title}> Descripción : <p className={styles.info}>{user?.descripcion ? user.descripcion : 
            <p className={styles.info}>-</p>}</p> </h4>
            <h4 className={styles.title}>Email : <p className={styles.info}>{user?.email}</p>  </h4>
            <h4 className={styles.title}> Puntuación de Quiz: {  user.point  ? <div className={styles.title}> 
            <p className={styles.point}>{user.point}</p> </div> :
            <div className={styles.info} >
                <p  className={styles.info}>Todavía no tienes puntuación</p>
                <button className={styles.button}>Empezar Quiz</button>
            </div>  } 
            </h4>
          </div>
          <div className={styles.content}> <div className={styles.title}><p className={styles.title} >Países creados por {user?.name} :</p>  <div>
           { ( (countriesByUser.countries?.length !== 0)   ? countriesByUser.countries?.map((c) => {
             return  (<div className={styles.divCountriesCreated} onClick={(e) => handleCoutrySelected(e,c)} ><p className={styles.info}> 🌍 {c?.name} </p> : <img className={styles.imageCountries}
                src={c?.flag ? (c.flag) : (<p className={styles.info}>Image not found</p>) }/></div> )    
            }) :
             <p className={styles.info}>No tienes países creados  <button className={styles.button} onClick={() => setCreateCountry(true)}>Crea tu propio pais </button></p>)  }
            </div>
            </div> 
            </div>
            <br></br>
            <div className={styles.content}><p className={styles.title}>Insignias :</p>
              <div className={styles.insignias}>
              {user?.point > 20 ? <button title="Trofeo de bronce (20 preguntas correctas)" className={styles.insignia20}>👦</button> : null}
              {user?.point > 35 ? <button title="Trofeo de plata (35 preguntas correctas)" className={styles.insignia50}>🌎</button> : null}
              {user?.point > 50 ? <button title="Trofeo de oro (50 preguntas correctas)" className={styles.insignia70}>🏆</button> : null}
              {user?.point > 70 ? <button title="Trofeo de diamante (70 preguntas correctas)" className={styles.insignia100}>🚀</button> : null}
            </div></div>

            
        </Modal.Body>
        
      </Modal>
    </>
  );
}
