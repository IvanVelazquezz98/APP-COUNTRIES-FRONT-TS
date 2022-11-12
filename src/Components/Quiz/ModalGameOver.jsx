import React, { useState  } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link , useHistory } from 'react-router-dom';
import { updateUserScore } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ModalGameOver.module.css'

export default function ModalGameOver({ user, score , closeModal }) {
  const [show, setShow] = useState(true);
  const [userScore , setUserScore] = useState({
    userId: user.id,
    point: score
  })

  const dispatch = useDispatch()

  const handleSumbitScore = () => {
    dispatch(updateUserScore(userScore))
    setTimeout(function () {
      window.location.reload();
    }, 2500);
  }
  const handleReturnHome = () => {
    window.location.reload();
  }
  return (
    <>

      <Modal show={show}>
        <Modal.Header >
          <Modal.Title> Ups! Has cometido los 3 errores permitidos 😔 </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className={styles.title}>Tu puntuacion fue de {score}</h3>
          {score > 50 ? <p className={styles.text}>Wow tu puntuacion fue muy alta, Felicidades! 😀 </p> : 
          <p className={styles.text}>Cuando tu puntuacion supere los 50 seras un sabelotodo, asi que ya sabes, puedes repetir el Quiz cuando quieras 😀</p>}
          <button className={styles.button} onClick={(e) => handleSumbitScore(e)} >Subir puntuacion </button> <button className={styles.button} onClick={(e) => handleReturnHome()}>Volver a home</button>
        </Modal.Body>
      </Modal>
    </>
  );
}