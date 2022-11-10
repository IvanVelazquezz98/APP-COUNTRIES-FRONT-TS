import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './DetailCountry.module.css'
import { setFavorite } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';


export default function ModalDetail({user , country , closeModal }) {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  
  function handleClose() {
    closeModal()
    setShow(false)
  }

  const handleSetFavorite = (country) => {
    let countryFavoriteUser = {
      name : country.name,
      flag : country.flag,
      continent : country.continent,
      capital : country.capital,
      subregion : country.subregion,
      area : country.area,
      population : country.population,
      location : country.location,
      timezones : country.timezones,
      userId : user.id
    }
    // dispatch(setFavorite(countryFavoriteUser))

  }
  return (
    <>

      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose} >
          <Modal.Title> Detalles de {country.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <img  className={styles.image} src={country?.flag ? (country.flag) : (<p>Image not found</p>) }/>
          </div>
          <div className={styles.content}>
            <h4 className={styles.continent}> Continente : {country.continent} </h4>
          <div><h5 className={styles.text}>🏙️ Capital: {country.capital}</h5></div>
          <div><h5 className={styles.text}>👉 Sub Region: {country.subregion}</h5></div>
          <div><h5 className={styles.text}>📍 Area: {country.area}</h5></div>
          <div><h5 className={styles.text}>👤 Poblacion: {country.population}</h5></div>
          <div><h5 className={styles.text}>🗺️ Localizacion: <a href={country.location}>{country.location}</a></h5></div>
          <div><h5 className={styles.text}>⌚ Zona Horaria: {country.timezones}</h5></div>
          <div><button className={styles.button} onClick={() => handleSetFavorite()}> ❤️ </button></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}