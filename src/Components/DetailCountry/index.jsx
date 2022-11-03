import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './DetailCountry.module.css'
import { Link , useHistory } from 'react-router-dom';

export default function ModalDetail({ country , closeModal }) {
  const [show, setShow] = useState(true);
  
  function handleClose() {
    closeModal()
    setShow(false)
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
            <h4 className={styles.continent}> 🌎 Continente : {country.continent} </h4>
          <div><h5 className={styles.text}>🏙️ Capital: {country.capital}</h5></div>
          <div><h5 className={styles.text}>👉 Sub Region: {country.subregion}</h5></div>
          <div><h5 className={styles.text}>📍 Area: {country.area}</h5></div>
          <div><h5 className={styles.text}>👤 Poblacion: {country.population}</h5></div>
          <div><h5 className={styles.text}>🗺️ Localizacion: <a href={country.location}>{country.location}</a></h5></div>
          <div><h5 className={styles.text}>⌚ Zona Horaria: {country.timezones}</h5></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}