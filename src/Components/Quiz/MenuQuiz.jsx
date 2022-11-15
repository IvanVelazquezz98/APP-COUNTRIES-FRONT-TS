import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link , useHistory } from 'react-router-dom';
import ModalQuiz from '.';
import ModalRanking from './ModalRanking';
import styles from './MenuQuiz.module.css'

export default function ModalMenuQuiz({ user, closeModal }) {
  const [show, setShow] = useState(true);
  const [openChallenge, setOpenChallenge] = useState(false)
  const [openRanking , setOpenRanking] = useState(false)

  function closeModalQuiz (){
    setOpenChallenge(false)
  }
  function closeModalRanking (){
    setOpenRanking(false)
  }
  return (
    <>

      <Modal show={show}>
        <Modal.Header closeButton onClick={() =>  closeModal()} >
          <Modal.Title> Hola {user?.name} Bienvenido al QuizCountries 🌎 </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {openChallenge ? <ModalQuiz user={user} closeModal={closeModalQuiz} /> : null}
            {openRanking ? <ModalRanking user={user} closeModal={closeModalRanking}/> : null}
            <div className={styles.divButtons}>
            <button className={styles.button} onClick={() => setOpenChallenge(true)}>Jugar QuizCountries</button>
            <button className={styles.button} onClick={() => setOpenRanking(true)}>Ranking de usuarios</button></div>
            <div className={styles.title}>
            <h3 className={styles.text}>Este juego consiste en responder preguntas acerca de países, geografía y un poquito de todo relacionado con los mismos</h3></div>
             <div className={styles.reglas}><h4 >Reglas:</h4></div>
             <h5 className={styles.textReglas}>* Tienes 3 errores permitidos </h5> 
             <h5 className={styles.textReglas}>* Cada pregunta tiene un total de 4 opciones</h5>
             <h5 className={styles.textReglas}>* Son más de 100 preguntas</h5>
             <h5 className={styles.textReglas}>* No sabrás cuando has cometido un error ni tu puntuación actual, así que piensa bien tus respuestas </h5>   
             <div className={styles.title}><h5 className={styles.textReglas}>Responde lo mejor que puedas, deja tu nombre en el ranking de usuarios y consigue todas las insignias.</h5>
             <h4 className={styles.textReglas}>¿Podrás ser el mejor de todos? 🏆</h4></div>
                    </Modal.Body>
      </Modal>
    </>
  );
}
