import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './ModalVistaPrevia.module.css';
import { createCountry } from '../../Redux/actions';
import { useDispatch } from "react-redux";


export default function ModalVistaPrevia({ country, closeModal }) {
  const [showError, setShow] = useState(true);
  const dispatch = useDispatch()
  console.log('country del modal', country )
  const handleCreateCountry =  () => {
    dispatch(createCountry(country))
    setTimeout(function () {
        window.location.reload();
      }, 2500);
  }
  
  return (
    <>

      <Modal show={showError}>
        <Modal.Header closeButton onClick={() =>  closeModal()} >
          <Modal.Title> Vista previa de {country.name} </Modal.Title>
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
          </div>
         <button className={styles.button} onClick={() => handleCreateCountry()}>Crear Pais 🌎</button>
        </Modal.Body>
      </Modal>
    </>
  );
}